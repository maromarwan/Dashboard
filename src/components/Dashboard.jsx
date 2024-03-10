import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import Chart from './Chart';
import Chart2 from './Chart2';


export default function Dashboard() {
  return (
    <div className='bg-gray-100'>
        <div className='flex items-center px-2 py-2'>
            <input type="text" className='border-[1px] border-gray-500 rounded-tl-[3px] rounded-bl-[3px] placeholder:text-gray-400 placeholder:text-sm placeholder:px-2'placeholder='Search'/>
            <div className='bg-blue-500 h-[26px] flex items-center px-2 rounded-tr-[3px] rounded-br-[3px]'>
            <IoSearchSharp className='cursor-pointer' color='white'/>
            </div>
        </div>
        <div className='grid grid-cols-4 gap-3 px-4 py-3 leading-9'>
            <div className='h-[80px] bg-white p-3 rounded border-l-[4px] border-slate-600 flex items-center justify-between cursor-pointer hover:shadow-lg hover:scale-[103%] transition duration-300 ease-in'>
                 <div>
                 <h1 className='text-sm text-slate-400'>EARNING (MONTHLY)</h1>
                   <h1>2,000$</h1>
                 </div>
                 <FaCalendarAlt />
            </div>
            <div className='h-[80px] bg-white p-3 rounded border-l-[4px] border-green-500 flex items-center justify-between cursor-pointer hover:shadow-lg hover:scale-[103%] transition duration-300 ease-in'>
                 <div>
                   <h1 className='text-sm text-green-400'>EARNING (ANNUAL)</h1>
                   <h1>40,000$</h1>
                 </div>
                 <FaCalendarAlt />
            </div>
            <div className='h-[80px] bg-white p-3 rounded border-l-[4px] border-yellow-500 flex items-center justify-between cursor-pointer hover:shadow-lg hover:scale-[103%] transition duration-300 ease-in'>
                 <div>
                 <h1 className='text-sm text-yellow-400'>TASKS</h1>
                   <h1>33,000$</h1>
                 </div>
                 <FaCalendarAlt />
            </div>
            <div className='h-[80px] bg-white p-3 rounded border-l-[4px] border-blue-500 flex items-center justify-between cursor-pointer hover:shadow-lg hover:scale-[103%] transition duration-300 ease-in'>
                 <div>
                 <h1 className='text-sm text-blue-400'>PENDING REQUESTS</h1>
                   <h1>190,000$</h1>
                 </div>
                 <FaCalendarAlt />
            </div>
        </div>
        <div className='flex'>
        <div className='basis-[50%] bg-white py-3'>
          <Chart/>
        </div>
        <div className='basis-[50%] bg-white py-3'>
          <Chart2/>
        </div>
        </div>
        
    </div>
  )
}
