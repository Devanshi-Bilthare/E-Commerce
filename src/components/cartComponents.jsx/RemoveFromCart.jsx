import React, { useContext } from 'react'
import { cartDataContext } from '../../context/CartContext'
import { toast } from 'react-toastify'

const RemoveFromCart = ({product}) => {
  const {cartData,setCartData} = useContext(cartDataContext)

  const removeData = () => {
    const updatedCartData = cartData.map((item)=> {
      if(item.title == product.title){
        return {...item,quantity:item.quantity-1}
      }
      return item
    }).filter(item => item.quantity > 0)

    setCartData(updatedCartData)
    toast.success("Item Removed from cart")
  }

  return (
    <button onClick={removeData} className='w-[5%] text-xl'><i className="ri-close-circle-line"></i></button>
  )
}

export default RemoveFromCart