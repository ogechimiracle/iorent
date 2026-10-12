'use client'

import { Plus } from "lucide-react"

export default function AdminCarsPage(){
   return (
      <div>
         <div className="flex items-center justify-between">
            <div>
               <h1 className="text-2xl font-semibold">Managers Cars</h1>
               <small className="font-normal dark:text-gray-400">Add, remove, edit or update car details</small>
            </div>

            <button className="bg-green-500 px-4 py-2.5 rounded-lg dark:bg-card dark:text-white text-black inline-flex items-center space-x-2 cursor-pointer">
               <Plus size={25}/>
               <span>Add Car</span>
            </button>
         </div>
      </div>
   )
}