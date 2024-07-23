import axiosInstance from '../utils/axios'
import React, { createContext, useEffect, useState } from 'react'

export const productContext = createContext()

const AllProductContext = ({children}) => {
    const[products,setProducts] = useState([])
    const[singleProduct,setSingleProduct] = useState()

    const getProducts =async () =>{
        try{
            const {data} =await axiosInstance.get('/products')
            setProducts(data)
            console.log(data)
        }catch(err){
            console.log(err)
        }
    }

    const getSingleProducts =async (id) =>{
        try{
            const {data} =await axiosInstance.get(`/products/${id}`)
            setSingleProduct(data)
        }catch(err){
            console.log(err)
        }
    }

  return (
    <productContext.Provider value={{products,getProducts,getSingleProducts,singleProduct}}>
        {children}
    </productContext.Provider>
   
  )
}

export default AllProductContext