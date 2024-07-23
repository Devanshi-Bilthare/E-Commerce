import React, { useContext } from 'react'
import { cartDataContext } from '../../context/CartContext'

const CartTotal = () => {
    const{cartData} = useContext(cartDataContext)
    const total = cartData.reduce((accum, item) => accum + item.price * item.quantity, 0);
    
    let totalData = ''
    if(total){
        totalData = <h2 className='w-full mb-20 text-2xl w-max px-10 py-5 border m-auto'>Total Price: {total}</h2>
    }
  return (
    <div>{totalData}</div>
  )
}

export default CartTotal