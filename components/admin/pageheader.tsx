'use client'

import { Plus } from "lucide-react";


interface AdminPageHeaderProps{
   title: string,
   subtitle:string
   action?: ()=>void,
   actionText?: string
}


export default function AdminPageHeader({title, subtitle,action, actionText}:AdminPageHeaderProps){
   return (
     <div className="flex items-center justify-between">
       <div>
         <h1 className="text-2xl font-semibold">{title}</h1>
         <small className="font-normal dark:text-gray-400">{subtitle}</small>
       </div>

       {action && (
         <button className="bg-green-500 px-4 py-2.5 rounded-lg dark:bg-card dark:text-white text-black inline-flex items-center space-x-2 cursor-pointer" onClick={action}>
           <Plus size={25} />
           <span>{actionText}</span>
         </button>
       )}
     </div>
   );
}