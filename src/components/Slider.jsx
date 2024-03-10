import React from 'react'
import { FaTachometerAlt } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";



export default function Slider() {
  return (
    <div className='bg-blue-500 hover:bg-blue-700 px-1 h-screen text-white transition duration-300 ease-in'>
      <div className='flex justify-center items-center gap-3 py-3 border-b-[1px]'>
      <h1 className='font-bold cursor-pointer'>Admin Panel</h1>
      </div>
      <div className='flex items-center pl-6 gap-3 py-2 border-b-[1px]'>
      <FaTachometerAlt/> <p className='cursor-pointer text-sm'>Dashboard</p>
      </div>
      <div className='flex items-center pl-6 gap-3 py-2 border-b-[1px]'>
      <IoIosContact /> <p className='cursor-pointer text-sm'>Profile</p>
      </div>
    </div>
  )
}
