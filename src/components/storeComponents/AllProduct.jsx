import React, { useContext, useEffect, useState } from 'react'
import { productContext } from '../../context/AllProductContext'
import SingleProduct from './SingleProduct'
import Loading from '../Loading'

const AllProduct = () => {
    const {products,getProducts} = useContext(productContext)
    useEffect(()=>{
        getProducts()
    },[])
    
    let productsData = <Loading/>
    if(products.length != 0){
        productsData =  products.map((product)=>(
                <SingleProduct product={product}/>
            ))
        
    }
  return (
    <div className='w-full gap-10 flex flex-wrap items-center justify-center my-20'>
        {productsData}
    </div>
  )
}

export default AllProduct