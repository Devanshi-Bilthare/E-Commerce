import React from 'react'

const BgCircle = ({val}) => {
  return (
    <div className='w-[30px] h-[30px] bg-white rounded-full flex justify-center items-center text-black'>
        <i className={val}></i>
    </div>
  )
}

export default BgCircle