import React, { useState } from 'react'
import Nav from '../components/Nav'
import { Category } from '../Category'
import Card from '../components/Card'
import { food_items } from '../food'

function Home(){

    let [category,setCategory]=useState(food_items);

    function filtering(categoryInput){
        console.log("category name :",categoryInput)
        if(categoryInput==="ALL"){
            setCategory(food_items);
        }
        else{
            let newFoodList=food_items.filter((item)=>item.food_category===categoryInput.toLowerCase())
            setCategory(newFoodList)
        }
    }
    return(
        <div className='bg-slate-200 w-full min-h-screen'>
            <Nav/>
            <div className='flex flex-wrap justify-center items-center gap-5 w-[100%]'>
             {Category.map((items)=>(
                 <div 
                 
                 className='w-[110px] h-[120px] bg-white flex flex-col  gap-5 justify-center p-6 text-[14px] font-semibold text-gray-600 rounded-lg shadow-md hover:bg-green-200 cursor-pointer transition-all duration-200' onClick={()=>filtering(items.name)}>
                    {items.icon}
                    <span>{items.name}</span>
                </div>
             )
            )
        }
        
            </div>


            <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-7 pb-8' >
             {category.map((items)=>(
    
                     <Card name={items.food_name} image={items.food_image} price={items.price} id={items.id} type={items.food_type}  />
             ))}
            
            </div>
        </div>
    )
}

export default Home