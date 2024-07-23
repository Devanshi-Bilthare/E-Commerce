import React from 'react'
import { NavLink } from 'react-router-dom'

const HomeBanner = () => {
  return (
    <div className='w-full h-[90vh] relative'>
        <img src="https://plus.unsplash.com/premium_photo-1708632849593-3e0d77b47b97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGZhc2hpb258ZW58MHx8MHx8fDA%3D" className='w-full object-cover h-full rounded-[40px] object-center absolute z-[-1]' alt="" />
        <div className='w-full h-full backdrop-blur-sm rounded-[40px] text-white pt-20 ps-20'>
            <h1 className='text-7xl leading-[90px] w-[34%] font-[100] mb-20'>Your One-Stop Shop for Quality and Value!</h1>
            <NavLink to='/store' className='px-10 py-4 bg-black rounded-[20px] text-xl uppercase'>Shop Now!</NavLink>
        </div>
    </div>
  )
}

export default HomeBanner