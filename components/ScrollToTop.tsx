'use client'

import { useState, useEffect } from "react"
import { IoMdArrowRoundUp } from "react-icons/io";


export default function ScrollToTop(){
     const [isScrolled, setIsScrolled] = useState<boolean>(false)

     useEffect(()=>{
          const scrolTo =()=>{
               window.scrollY >40 ? setIsScrolled(true):setIsScrolled(false)
          }
          window.addEventListener("scroll",scrolTo)

          return ()=>{
               window.removeEventListener("scroll",scrolTo)
          }
     })

     const handleScrolToTop =()=>{
          if(window.scrollY >30){
               window.scrollTo({
                 top: 0,
                 behavior: "smooth"
               });
                    
               
          }
     }

     return (
          <button className={` z-30 fixed bottom-10 right-8 size-12 rounded-full grid place-content-center bg-green-700 text-white dark:bg-slate-700 dark:text-white animate-bounce ease-in duration-300 cursor-pointer ${isScrolled ? 'block':'hidden'}`} onClick={handleScrolToTop}>
               <IoMdArrowRoundUp size={25}/>
          </button>
     )
}