import React from 'react'
import { NavLink } from 'react-router-dom'
import AddToCart from '../cartComponents.jsx/AddToCart'

const SingleProduct = ({product}) => {
  return (
    <div className='w-[25%] h-[60vh] bg-white border-2 rounded-[40px] pt-5'>
        <img src={product.image} alt="product image" className='w-full h-[70%] object-contain object-top' />
        <NavLink to={`/productDetail/${product.id}`}><h2 className='px-5 mt-5 text-xl underline'>{product.title.slice(0,27)}</h2></NavLink>
        <div className='flex justify-between p-5'>
            <p className='text-xl'>${product.price}</p>
            <AddToCart product={product}/>
        </div>
    </div>
  )
}

export default SingleProduct