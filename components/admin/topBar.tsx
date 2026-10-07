'use client'
import { IoMdNotifications, IoMdMenu } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";

export default function AdminTopBar(){
   return (
     <div>
       <div className="flex items-center justify-between py-5 lg:px-8 px-5 ">
         <div>Dashboard</div>

         <div className="flex items-center space-x-5">
           <div className="relative ">
             <IoMdNotifications size={30} />
             <div className="absolute -right-2 -top-1 text-sm flex items-center justify-center size-5 rounded-full dark:bg-slate-600 bg-red-500 text-white">2</div>
           </div>
            <div>
               <FaRegUser size={25}/>
            </div>
            <button className="lg:hidden px-2 py-1 rounded-lg border">
               <IoMdMenu size={25}/>
            </button>
         </div>
       </div>
     </div>
   );
}