import React from 'react'
import BgCircle from './BgCircle'

const Footer = () => {
  return (
    <div className='w-full bg-zinc-900 text-white rounded-t-[40px] p-20 flex justify-between'>
        <div className='flex flex-col gap-1'>
            <h2 className='text-2xl font-[700] mb-5'>Help & Info</h2>
            <p>Contact Us</p>
            <p>Delivery</p>
            <p>Returns</p>
            <p>FAQs</p>
            <p>Careers</p>
            <p>T&Cs</p>
            <p>Privacy Policy</p>
        </div>
        <div className='flex flex-col gap-1'>
            <h2 className='text-2xl font-[700] mb-5'>Shop</h2>
            <p>Mens</p>
            <p>Womens</p>
            <p>Kids</p>
            <p>WetSuit</p>
            <p>Boardsports</p>
            <p>Outlet</p>
            <p>Store Locator</p>
        </div>
        <div className='flex flex-col gap-1'>
            <h2 className='text-2xl font-[700]'>Follow Us</h2>
            <div className='w-[10vw] gap-2 mt-5 flex flex-wrap'>
                <BgCircle val={'ri-facebook-fill'}/>
                <BgCircle val={'ri-instagram-line'}/>
                <BgCircle val={'ri-pinterest-line'}/>
                <BgCircle val={'ri-twitter-fill'}/>
                <BgCircle val={'ri-tiktok-fill'}/>
                <BgCircle val={'ri-mail-line'}/>
            </div>
            
        </div>
        <div className='w-[16%] flex flex-col gap-1'>
            <h2 className='text-2xl font-[700] mb-5'>Contact</h2>
            <p className='underline'>Info@ecommerce.com 0129875653</p>
            <p>Mon to Fri 9am - 5pm GMT.</p>
            <p>Please check your spam folder for email responses.</p>
        </div>

    </div>
  )
}

export default Footer