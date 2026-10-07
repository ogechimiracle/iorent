'use client'
import Link from "next/link"
import { adminNavLinks } from "@/utils/constant"
import ThemeToggle from "../theme-toggle";
import { usePathname } from "next/navigation";



export default function AdminNavBar(){
   const path = usePathname()
   return (
     <aside>
       <div className="w-full border-b-2 py-2 px-4 flex items-center justify-between">
         <div>
            <p className="text-black dark:text-white text-xl font-bold">Carento</p>
            <p className="text-sm font-normal text-gray-800 dark:text-gray-200">Admin Dashboard</p>
         </div>
         <ThemeToggle/>
       </div>

       <div className="mt-8 flex flex-col px-4">
         {adminNavLinks.map((items, index) => (
           <Link key={index} href={items.path} className={`py-3 dark:hover:bg-slate-600 px-2 rounded-lg ${path === items.path ?"bg-green-600 text-white":""}`}>{items.label}</Link>
         ))}
       </div>
     </aside>
   );
}