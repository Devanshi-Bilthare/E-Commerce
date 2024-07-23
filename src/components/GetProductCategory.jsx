import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { createCategoryContext } from '../context/CategoryContext'
import SingleProduct from './storeComponents/SingleProduct'
import Loading from './Loading'

const GetProductCategory = () => {
    const {category} = useParams()
    const {categoryProducts,getProductByCategory} = useContext(createCategoryContext)

    useEffect(()=>{
        getProductByCategory(category)
    },[])

    let productsData = <Loading/>
    if(categoryProducts.length != 0){
        productsData =  categoryProducts.map((product)=>(
            <SingleProduct product={product}/>
        ))
        
    }

    return (
    <div className='w-full gap-10 flex flex-wrap items-center justify-center my-20'>
        {
           productsData
        }
    </div>
  )
}

export default GetProductCategory