import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='w-full flex justify-between px-20 py-5'>
        <div className='flex gap-20'>
            <NavLink to='/' className='text-xl flex gap-2 items-center'><i className="ri-home-2-line"></i>Home</NavLink>
            <NavLink to='/about' className='text-xl flex gap-2 items-center'><i className="ri-organization-chart"></i>About</NavLink>
            <NavLink to='/contact' className='text-xl flex gap-2 items-center'><i className="ri-phone-line"></i>Contact</NavLink>
            <NavLink to='/store' className='text-xl flex gap-2 items-center'><i className="ri-store-line"></i>Store</NavLink>
        </div>
        <NavLink to='/cart' className='text-xl flex gap-2 items-center'><i className="ri-shopping-cart-line"></i>Cart</NavLink>
    </nav>
  )
}

export default Nav