import React, { createContext, useState } from 'react'

export const cartDataContext = createContext()
const CartContext = ({children}) => {
    const[cartData,setCartData] = useState([])
  return (
    <cartDataContext.Provider value={{cartData,setCartData}}>
        {children}
    </cartDataContext.Provider>
  )
}

export default CartContext