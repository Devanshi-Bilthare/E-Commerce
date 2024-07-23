import React, { useContext, useEffect } from 'react'
import { productContext } from '../../context/AllProductContext'
import { NavLink, useParams } from 'react-router-dom'
import AddToCart from '../cartComponents.jsx/AddToCart'
import Loading from '../Loading'

const SingleProductDetails = () => {
    const {singleProduct,getSingleProducts} = useContext(productContext)
    const {id} = useParams()

    useEffect(()=>{
        getSingleProducts(id)
    },[])

    let productDetails = <Loading/>
    if(singleProduct){
        productDetails = 
        <>
            <img src={singleProduct.image} alt="single product image" className='w-[30%] h-[80vh] object-contain'/>
            <div className='w-[60%] py-10'>
                <h1 className='text-3xl'>{singleProduct.title}</h1>
                <div className='flex gap-10 mt-10 text-xl text-gray-500'>
                    <p>Rating : {singleProduct.rating.rate}</p>
                    <p>Stock : {singleProduct.rating.count}</p>
                </div>
                <p className='text-xl capitalize text-gray-500 mt-10 w-[80%]'>{singleProduct.description}</p>
                <p className='text-xl capitalize mt-10 text-gray-500'>Category : {singleProduct.category}</p>
                <p className='text-2xl capitalize my-10 text-gray-500'>${singleProduct.price}</p>
                <NavLink to='/cart' className='px-10 py-4 text-white bg-black w-max rounded-[10px] text-xl'>Add To Cart <AddToCart product={singleProduct}/></NavLink>
            </div>
        </>
        
    }
  return (
    <div className='w-full h-[90vh] flex items-center justify-between px-10'>
        {productDetails}
    </div>
  )
}

export default SingleProductDetails