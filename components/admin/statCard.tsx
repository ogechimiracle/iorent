import Link from "next/link"
import { LuArrowUp, LuAArrowDown, LuArrowDown } from "react-icons/lu"

interface statProps{
   label: string,
   count: number,
   path:string,
   textLink:string
}


export default function StatCard({label, count, path, textLink}:statProps){
   return (
     <div className="w-full px-5 py-4 rounded-xl text-black bg-gray-100 shadow-md dark:bg-slate-800 dark:text-white flex flex-col gap-y-2">
       <p className="text-sm font-semibold">{label}</p>
       <div className="flex items-center justify-between">
         <p className="text-lg font-bold ">+{count}</p>
         <div className="flex items-center">
           <LuArrowUp className="text-green-400" />
           <LuArrowDown className="text-red-500" />
         </div>
       </div>
       <Link className=" max-w-24 text-xs font-normal font-monserat px-2 py-1 rounded-lg border dark:border-amber-50 border-gray-400 hover:scale-100 transition-all ease-in-out duration-300 delay-150" href={path}>
         {textLink}
       </Link>
     </div>
   );
}