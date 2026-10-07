'use client'

import { useTheme } from "next-themes"
import {LuSun, LuMoon} from "react-icons/lu"


export default function ThemeToggle(){
     const {theme, setTheme} = useTheme()

     const toggleTheme = ()=>{
          setTheme(theme === "dark"? "light":"dark")
     }
     return(
          <button onClick={toggleTheme} className="bg-gray-50 hover:bg-gray-300 text-black px-2 py-1 rounded-md cursor-pointer" aria-label="Toggle dark Mode">
               {theme ==="dark" ?(
                    <LuSun  size={20}/>
               ):(
                    <LuMoon size={20}/>
               )}
          </button>
     )
}
