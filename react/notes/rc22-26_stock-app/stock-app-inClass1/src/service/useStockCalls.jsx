import { fetchFail, fetchStart, getStockSuccess } from "../features/stockSlice"
import useAxios from "./useAxios";
import {toastErrorNotify} from "../helper/ToastNotify"
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
  
    return {getStocks}
  
}

export default useStockCalls