'use client'
import { createMake, getAllCarMake } from "@/api/carService";
import AdminPageHeader from "@/components/admin/pageheader";
import Modal from "@/components/modal";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
  DataTable,
  DataTableAction,
  DataTableColumn,
} from "@/components/data-table/data-table";
import { CarMakeProps } from "@/types/types";
import { refresh } from "next/cache";





export default function AdminCarMakePage(){

   const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
   const [isLoading, setIsLoading] = useState<boolean>(false)
   const [makes, setMakes] = useState([])
   const [refresh, setRefresh] = useState<boolean>(false)

   const [input, setInput] = useState({
      name:"",
      slug: ""
   })

   const columns: DataTableColumn<any>[] = [
     { key: "id", label: "Make ID" },
     { key: "name", label: "Vehicle Make Name" },
     { key: "slug", label: "Slug" },
   ];

   const actions: DataTableAction<CarMakeProps>[] = [
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


      useEffect(()=>{
         const getCategories =async()=>{
            const data = await getAllCarMake()
            console.log(data)
            setMakes(data.data)
         }
         getCategories()
      }, [refresh])
   
   const handleSaveMake = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
     try {
       setIsLoading(true);
       const res = await createMake(input);
       if (res.status) {
         setIsModalOpen(false);
         setInput({
           name: "",
           slug: "",
         });
         setRefresh(!refresh)
         toast.success(res.data.message);
       } else {
         toast.error(res.data.message);
         setIsLoading(false);
       }
     } catch (error: any) {
       console.log(error.message);
     } finally {
       setIsLoading(false);
     }
   };

   return (
     <div>
       <AdminPageHeader
         title="Managers Car Makes"
         subtitle="Add, remove, edit or update car makes data"
         action={() => setIsModalOpen(true)}
         actionText="Create make"
       />

       <DataTable
         data={makes}
         columns={columns}
         actions={actions}
         searchKey="name"
         searchable
         selectable
         pagination
         pageSize={3}
       />

       <Modal
         title="Create Car Makes"
         isOpen={isModalOpen}
         onClose={() => setIsModalOpen(false)}
       >
         <form onSubmit={handleSaveMake}>
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