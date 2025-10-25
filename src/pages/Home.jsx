import React from 'react'
import Nav from '../components/Nav'
import { Category } from '../Category'
import Card from '../components/Card'
function Home(){
    return(
        <div className='bg-slate-200 w-full min-h-screen'>
            <Nav/>
            <div className='flex flex-wrap justify-center items-center gap-5 w-[100%]'>
             {Category.map((items)=>{
                return <div className='w-[140px] h-[150px] bg-white flex flex-col  gap-5 justify-center p-6 text-[20px] font-semibold text-gray-600 rounded-lg shadow-md hover:bg-green-200 cursor-pointer transition-all duration-500'>
                    {items.icon}
                    {items.name}
                    
                </div>
             }
            )
        }
        
            </div>

            <Card/>
        </div>
    )
}

export default Home