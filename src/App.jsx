import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Nav from './components/Nav'
import Store from './pages/Store'
import Footer from './components/Footer'
import ProductDetail from './pages/ProductDetail'
import GetProductCategory from './components/GetProductCategory'

const App = () => {
  
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/store' element={<Store/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/productDetail/:id' element={<ProductDetail/>}/>
      <Route path='/productsBy/:category' element={<GetProductCategory/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App