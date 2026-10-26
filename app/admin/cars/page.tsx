'use client'

import AdminPageHeader from "@/components/admin/pageheader"
import { Plus } from "lucide-react"

export default function AdminCarsPage(){
   return (
     <div>
       <AdminPageHeader
         title="Managers Cars"
         subtitle="Add, remove, edit or update car details"
         action={()=>{}}
         actionText="Add Car"
       />
      
     </div>
   );
}