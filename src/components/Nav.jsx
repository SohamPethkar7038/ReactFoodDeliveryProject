import React from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";

function Nav(){
    return(
            <div className=' w-full h-[100px] flex justify-between items-center px-5 md:px-8 '>

                <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
                    <MdFastfood className='w-[30px] h-[30px] not-first text-green-500' />
                </div>
                <form className='w-[65%] h-[60px] bg-white flex items-center px-5 gap-1 shadow-md'>
                    <IoSearch className='text-green-500 w-[10px] h-[20px] rounded-md md:w-[10%] ' />
                    <input type="text" placeholder='search items' className=' outline-none text-[17px] text-gray-400 md:text-[18px]' />
                </form>
                <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative'>
                    <span className='absolute top-1 right-2 text-green-500 font-bold text-[18px]'>0</span>
                   <LuShoppingBag className='w-[30px] h-[30px] text-green-500' />
                </div>
            </div>
        
    )
}

export default Nav