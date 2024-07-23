import React, { createContext, useEffect, useState } from 'react'
import axiosInstance from '../utils/axios'

export const createCategoryContext = createContext()
const CategoryContext = ({children}) => {

    const[category,setCategory] = useState([])
    const[categoryProducts,setCategoryProducts] = useState([])

    const getCategory = async ()=>{
        try{
            const {data} =await axiosInstance.get('/products/categories')
            setCategory(data)
        }catch(err){
            console.log(err)
        }
        
    }

    useEffect(()=>{
        getCategory()
    },[])

    const getProductByCategory = async (cat)=>{
        try{
            const {data} =await axiosInstance.get(`/products/category/${cat}`)
            setCategoryProducts(data)
        }catch(err){
            console.log(err)
        }
    }  

  return (
    <createCategoryContext.Provider value={{category,categoryProducts,getProductByCategory}}>
        {children}
    </createCategoryContext.Provider>
  )
}

export default CategoryContext