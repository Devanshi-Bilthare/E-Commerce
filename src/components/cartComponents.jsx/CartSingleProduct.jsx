import React from 'react'
import RemoveFromCart from './RemoveFromCart'
import { NavLink } from 'react-router-dom'

const CartSingleProduct = ({product}) => {
  return (
    <div className='w-full flex justify-between items-center border-2 p-2 text-xl capitalize'>
        <img src={product.image} alt="product Image" className='w-[100px] h-[100px] object-contain'/>
        <h2 className='w-[20%] underline'><NavLink to={`/productDetail/${product.id}`}>{product.title}</NavLink></h2>
        <h2 className='w-[20%]'>{product.category}</h2>
        <h2 className='w-[10%]'>{product.quantity}</h2>
        <h2 className='w-[10%]'>{product.price}</h2>
        <RemoveFromCart product={product}/>
    </div>
  )
}

export default CartSingleProduct