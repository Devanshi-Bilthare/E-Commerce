import React, { useContext } from 'react'
import { createCategoryContext } from '../context/CategoryContext'
import { NavLink } from 'react-router-dom'

const GetCategories = () => {
    const {category} = useContext(createCategoryContext)
  return (
    <div className='w-full px-10 flex gap-10 justify-center items-center py-28'>
        {
            category.map((item)=>(
                <div className='w-[40vh] h-[30vh] flex justify-center items-center text-2xl uppercase rounded-[50px] shadow-lg shadow-gray-500/40 hover:shadow-indigo-500/40'><NavLink to={`/productsBy/${item}`}>{item}</NavLink></div>
            ))
        }
    </div>
  )
}

export default GetCategories