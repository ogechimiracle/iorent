'use client'

import SalesList from "@/components/admin/saleList";
import StatCard from "@/components/admin/statCard"
import Link from "next/link";




export default function AdminDashboard(){
   return (
     <div>
       <p>Carento Analytics</p>
       <div className="mt-5 mb-5 grid grid-cols-1 lg:grid-cols-3 py-2 lg:gap-1.5 gap-3">
         <div className=" lg:col-span-2">
           <div className="grid grid-cols-1 lg:grid-cols-3  gap-2">
             <StatCard
               label="Total Sales"
               count={34}
               path="/admin/sales"
               textLink="view sales"
             />
             <StatCard
               label="Cars"
               count={100}
               path="/admin/cars"
               textLink="See Cars"
             />
             <StatCard
               label="Cars Rented"
               count={20}
               path="/admin/rentals"
               textLink="view all"
             />
             <StatCard
               label="Dealers"
               count={55}
               path="/admin/dealers"
               textLink="view"
             />
             <StatCard
               label="Users"
               count={10}
               path="/admin/users"
               textLink="users"
             />
             <StatCard
               label="Total Revenue"
               count={24500}
               path="/admin/rentals"
               textLink="Account"
             />
           </div>
         </div>

         <div className=" px-2 py-2 bg-green-800 rounded-lg">
            <div className="flex items-center justify-between">
               <p>Top Sales</p>
               <Link href="">see all</Link>
            </div>
            
            <div className="mt-4">
               <SalesList name="Lexus RX350" brand="Toyota" img="/images/hero1.jpeg"/>
            </div>

         </div>

       </div>
     </div>
   );
}