import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AllProductContext from './context/AllProductContext.jsx'
import CartContext from './context/CartContext.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import CategoryContext from './context/CategoryContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AllProductContext>
    <CartContext>
      <CategoryContext>
        <BrowserRouter>
          <App />
          <ToastContainer/>
        </BrowserRouter>
      </CategoryContext>
    </CartContext>
  </AllProductContext>
  
)
