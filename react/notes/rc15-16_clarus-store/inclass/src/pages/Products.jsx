import React, { useEffect, useState } from 'react'
import SearchInput from '../components/SearchInput'
import ProductCard from '../components/ProductCard'
import axios from "axios";
import Loading from '../components/Loading';

const Products = () => {
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

  // useEffect(() => {
  //   getData()
  // },[]) //! componentDidMount yani baslangicta calis bir daha calisma

  useEffect(() => {
    getData()
  },[search]) //! search state i degistikce getData fonksiyonu calissin

  return (
    // <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <div className="container">
      <SearchInput search={search} setSearch={setSearch} />
      <h2 className="text-2xl font-bold mt-8 tracking-tight text-gray-900">
        All Products
      </h2>
      {loading ? (
        <Loading />
      ) : products.length ? (
        // <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 xl:gap-x-8">
        <div className="card-div">
          {products.map((item) => (
            <ProductCard />
          ))}
        </div>
      ) : (
        <h2 className="text-center text-3xl text-red-600 mt-32">No Products</h2>
      )}
      
    </div>
  )
}

export default Products