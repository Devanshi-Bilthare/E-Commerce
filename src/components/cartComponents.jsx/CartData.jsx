import React, { useContext } from 'react'
import { cartDataContext } from '../../context/CartContext'
import CartSingleProduct from './CartSingleProduct'

const CartData = () => {
    const{cartData}  = useContext(cartDataContext)

  return (
      cartData.length != 0 ? <div className='w-full px-20 mt-20 mb-10 flex flex-col gap-4'>
      {
          cartData.map((item)=>(
              <CartSingleProduct product={item}/>
          ))
      }
    </div> : <h1 className='w-full h-[50vh] flex justify-center items-center text-7xl text-gray-200 uppercase '>Your Cart Is Empty</h1>
    
  ) 
}

export default CartData