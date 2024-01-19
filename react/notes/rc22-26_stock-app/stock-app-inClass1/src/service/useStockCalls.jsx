import { fetchFail, fetchStart, getProPurBranFirmSuccess, getStockSuccess } from "../features/stockSlice"
import useAxios from "./useAxios";
import {toastErrorNotify, toastSuccessNotify} from "../helper/ToastNotify"
import { useDispatch } from "react-redux";


const useStockCalls = () => {
    const {axiosWithToken} = useAxios()
    const dispatch = useDispatch()

    // const getFirms = async () => {
    //     dispatch(fetchStart())
    //     try {
    //         const {data} = await axiosWithToken("/firms")
    //         dispatch(getFirmsSuccess(data.data))
    //     } catch (error) {
    //         dispatchEvent(fetchFail())
    //         toastErrorNotify("Firma bilgileri çekilemedi.")
    //     }
    // }

    // const getSales = async () => {
    //     dispatch(fetchStart())
    //     try {
    //         const {data} = await axiosWithToken("/sales/")
    //         dispatch(getSalesSuccess(data.data))
    //     } catch (error) {
    //         dispatchEvent(fetchFail())
    //         toastErrorNotify("Sales bilgileri çekilemedi.")
    //     }
    // }

    const getStocks = async (url = "firms") => {
        dispatch(fetchStart())
        try {
            const {data} = await axiosWithToken(`/${url}/`)
            const apiData = data.data
            dispatch(getStockSuccess({apiData, url}))
        } catch (error) {
            dispatchEvent(fetchFail())
            toastErrorNotify( `${url} bilgileri çekilemedi.`)
        }
    }

    const getProPurBranFirm = async () => {
        dispatch(fetchStart())
        try {
          const [products, purchases, brands, firms] = await Promise.all([
            axiosWithToken("/products/"),
            axiosWithToken("/purchases/"),
            axiosWithToken("/brands/"),
            axiosWithToken("/firms/"),
          ])
          dispatch(
            getProPurBranFirmSuccess([
              products?.data?.data,
              purchases?.data?.data,
              brands?.data?.data,
              firms?.data?.data,
            ])
          )
        } catch (error) {
          dispatch(fetchFail())
        }
      }
    

    const deleteStock = async (url = "firms", id) => {
        dispatch(fetchStart())
        try {
            await axiosWithToken.delete(`/${url}/${id}`)
            toastSuccessNotify( `${url} bilgisi silinmiştir.`)
            getStocks(url)
        } catch (error) {
            dispatchEvent(fetchFail())
            toastErrorNotify( `${url} silinemedi.`)
        }
    }
    const postStock = async (url = "firms", info) => {
        dispatch(fetchStart())
        try {
            await axiosWithToken.post(`/${url}/`, info)
            toastSuccessNotify( `${url} kayidi eklenmiştir.`)
            getStocks(url)
        } catch (error) {
            dispatchEvent(fetchFail())
            toastErrorNotify( `${url} kaydi eklenememiştir.`)
        }
    }
    const putStock = async (url = "firms", info) => {
        dispatch(fetchStart())
        try {
            await axiosWithToken.put(`/${url}/${info._id}`, info)
            toastSuccessNotify( `${url} kayidi güncellenmiştir.`)
            getStocks(url)
        } catch (error) {
            dispatchEvent(fetchFail())
            toastErrorNotify( `${url} kaydi güncellenememiştir.`)
        }
    }
  
    return {getStocks, deleteStock, postStock, putStock, getProPurBranFirm}
  
}

export default useStockCalls