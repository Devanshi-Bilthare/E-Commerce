import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-[70vh]'>
      <h1 className='text-3xl mt-20 ms-20 text-center'>We Are Available At</h1>
      <div className='gap-10 flex flex-wrap m-auto justify-center mt-20 text-stone-700'>
                <p className='ri-facebook-fill text-8xl'></p>
                <p className='ri-instagram-line text-8xl'></p>
                <p className='ri-pinterest-line text-8xl'></p>
                <p className='ri-twitter-fill text-8xl'></p>
                <p className='ri-tiktok-fill text-8xl'></p>
                <p className='ri-mail-line text-8xl'></p>
            </div>
    </div>
  )
}

export default Contact