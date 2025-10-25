import { TiThSmall } from "react-icons/ti";
import { MdFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { CiBowlNoodles } from "react-icons/ci";
import { MdFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";

export const Category=[
    {
        id:1,
        name:'ALL',
        icon: <TiThSmall className="w-[60px] h-[60px] text-green-600"/>
    },
     {
        id:2,
        name:'Breakfast',
        icon: <MdFreeBreakfast className="w-[60px] h-[60px] text-green-600" />
    },
     {
        id:3,
        name:'Soups',
        icon: <LuSoup className="w-[60px] h-[60px] text-green-600" />
    },
     {
        id:4,
        name:'Pasta',
        icon: <CiBowlNoodles className="w-[60px] h-[60px] text-green-600" />

    },
     {
        id:5,
        name:'Main_course',
        icon: <MdFoodBank className="w-[60px] h-[60px] text-green-600" />
    },
     {
        id:6,
        name:'Pizza',
        icon: <GiFullPizza className="w-[60px] h-[60px] text-green-600" />
    },
     {
        id:7,
        name:'Burger',
        icon: <GiHamburger className="w-[60px] h-[60px] text-green-600" />
    },
]

export default Category