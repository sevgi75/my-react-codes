import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";


const ProductContext = createContext()

const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("");
  console.log(search);

  const getData = async () => {
    setLoading(true)
    try {
      const {data} = await axios(`https://dummyjson.com/products/search?q=${search}`)
      console.log(data);
      setProducts(data.products)
    } catch (error) {
      console.log(error);
    }finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  },[search]) //! search state i degistikce getData fonksiyonu calissin

  return (
    <ProductContext.Provider value={{products, loading, search, setSearch}}>ProductProvider</ProductContext.Provider>
  )
}

export default ProductProvider;

export const useProducts = () => {
    useContext(ProductContext)
}

//! react hooklarini javascript fonksiyonlari icerisinde kullanamadigimiz icin custom hooklara ihtiyac duyariz.
//? custom hooklar use keywordu ile baslamak zorunda
//* custom hooklar jsx return etmez. 