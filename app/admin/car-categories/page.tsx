'use client'

import AdminPageHeader from "@/components/admin/pageheader"
import Modal from "@/components/modal"
import { useState, useEffect } from "react"
import { createCarCategory, getAllCategory } from "@/api/carService"
import { toast } from "react-toastify"
import {
  DataTable,
  DataTableAction,
  DataTableColumn,
} from "@/components/data-table/data-table";
import { CategoryProps } from "@/types/types"




export default function VehicleCategories(){
   const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
   const [isLoading, setIsLoading] = useState<boolean>(false)
   const [category, setCategory] = useState([])
   const [refresh, setRefresh] = useState<boolean>(false)

    const columns: DataTableColumn<any>[] = [
      { key: "id", label: "Category ID" },
      { key: "name", label: "Category name" },
      { key: "slug", label: "Slug" },
      { key: "description", label: "Description" },
      
    ];


    const actions: DataTableAction<CategoryProps>[] = [
         {
           label: "View",
           onClick: (vehicle) => console.log("View", vehicle),
         },
         {
           label: "Edit",
           onClick: (vehicle) => console.log("Edit", vehicle),
         },
         {
           label: "Delete",
           variant: "destructive",
           onClick: (vehicle) => console.log("Delete", vehicle),
         },
       ];

   const [input, setInput] = useState({
      name: "",
      slug: "",
      description:""
   })


   useEffect(()=>{
      const getCategories =async()=>{
        const data = await getAllCategory()
        console.log(data)
        setCategory(data.data)
      }
      getCategories()
   },[refresh])

   const saveCategory = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true)
    try {
  
       const res = await createCarCategory(input);
       if (res.status) {
         toast.success(res.message);
         setInput({
          name:"",
          slug:"",
          description:""
         })
         setIsLoading(false)
         setIsModalOpen(false)
       } else {
         toast.error(res.message);
       }
    } catch (error:any) {
      console.log(error.message)
    }finally{
      setIsLoading(false)
      setRefresh(!refresh)
    }
   };


   return (
     <div>
       <AdminPageHeader
         title="Managers Categories"
         subtitle="Add, remove, edit or update car categories"
         action={() => setIsModalOpen(true)}
         actionText="Add Category"
       />

       <div className="mt-8">

        <DataTable
          data={category}
          columns={columns}
          actions={actions}
          searchKey="name"
          searchable
          selectable
          pagination
          pageSize={3}
          
        />

       </div>

       <Modal
         title="Add Categories"
         isOpen={isModalOpen}
         onClose={() => setIsModalOpen(false)}
       >
         <form onSubmit={saveCategory}>
           <div className="flex flex-col gap-5">
             <div>
               <label htmlFor="">Name</label>
               <input
                 value={input.name}
                 onChange={(e) => setInput({ ...input, name: e.target.value })}
                 type="text"
                 className="w-full rounded-lg px-5 py-2.5 text-sm bg-transparent border"
               />
             </div>
             <div>
               <label htmlFor="">Slug</label>
               <input
                 value={input.slug}
                 onChange={(e) => setInput({ ...input, slug: e.target.value })}
                 type="text"
                 className="w-full rounded-lg px-5 py-2.5 text-sm bg-transparent border"
               />
             </div>
             <div>
               <label htmlFor="">Description</label>
               <input
                 value={input.description}
                 onChange={(e) =>
                   setInput({ ...input, description: e.target.value })
                 }
                 type="text"
                 className="w-full rounded-lg px-5 py-2.5 text-sm bg-transparent border"
               />
             </div>
             <button
               type="submit"
               disabled={isLoading}
               className="px-5 py-3 rounded-xl bg-green-600 text-white dark:text-black"
             >
               {isLoading ? "Please wait ...." : "Save and Continue"}
             </button>
           </div>
         </form>
       </Modal>
     </div>
   );
}