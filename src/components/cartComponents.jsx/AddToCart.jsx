import React, { useContext } from 'react'
import { cartDataContext } from '../../context/CartContext'
import { toast } from 'react-toastify'

const AddToCart = ({product}) => {
    const {cartData,setCartData} = useContext(cartDataContext)

    const addtocart = ()=>{
        const prodIdx = cartData.findIndex(item => item.title == product.title)
        const copyCartData = [...cartData]
        if(prodIdx === -1){
            copyCartData.push({...product,quantity:1})
        }else{
            copyCartData[prodIdx].quantity += 1
        }

        setCartData(copyCartData)

        toast.success("Item added to cart")
    }
  return (
    <button onClick={addtocart} className='text-xl'><i className="ri-shopping-cart-line"></i></button>
  )
}

export default AddToCart