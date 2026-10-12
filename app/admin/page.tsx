'use client'

import { InventoryChart } from "@/components/admin/chart/inventory";
import { RevenueChart } from "@/components/admin/chart/revenue";
import SalesList from "@/components/admin/saleList";
import StatCard from "@/components/admin/statCard"
import { DataTable, DataTableAction, DataTableColumn } from "@/components/data-table/data-table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";


const vehicles = [
  {
    id: "VEH-001",
    name: "Camry XLE",
    brand: "Toyota",
    year: 2024,
    price: 45000000,
    status: "Available",
  },
  {
    id: "VEH-002",
    name: "C-Class",
    brand: "Mercedes-Benz",
    year: 2023,
    price: 68000000,
    status: "Rented",
  },
  {
    id: "VEH-003",
    name: "Accord Touring",
    brand: "Honda",
    year: 2022,
    price: 38000000,
    status: "Sold",
  },
  {
    id: "VEH-004",
    name: "RX 350",
    brand: "Lexus",
    year: 2024,
    price: 92000000,
    status: "Available",
  },
];

type Vehicle = (typeof vehicles)[number];



export default function AdminDashboard(){

   const columns: DataTableColumn<Vehicle>[] = [
     { key: "id", label: "Vehicle ID" },
     { key: "name", label: "Vehicle" },
     { key: "brand", label: "Brand" },
     { key: "year", label: "Year" },
     {
       key: "price",
       label: "Price",
       render: (row) =>
         new Intl.NumberFormat("en-NG", {
           style: "currency",
           currency: "NGN",
           maximumFractionDigits: 0,
         }).format(row.price),
     },
     {
       key: "status",
       label: "Status",
       render: (row) => <Badge variant="outline">{row.status}</Badge>,
     },
   ];

   const actions: DataTableAction<Vehicle>[] = [
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
  
   return (
     <div className="font-roboto">
       <p className="">Carento Analytics</p>
       <div className="mt-2 mb-5 grid grid-cols-1 lg:grid-cols-3 py-2 lg:gap-1.5 gap-3">
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
             <SalesList
               name="Lexus RX350"
               brand="Toyota"
               img="/images/hero1.jpeg"
             />
           </div>
         </div>
       </div>

       <p className="mb-2">Chart Analytics</p>
       <section className="grid grid-cols-1 gap-6 xl:grid-cols-5">
         <div className="min-w-0 xl:col-span-3">
           <RevenueChart />
         </div>

         <div className="min-w-0 xl:col-span-2">
           <InventoryChart />
         </div>
       </section>

       <p className="mb-2 mt-2">Recent transaction</p>

       <div>
         <DataTable
           data={vehicles}
           columns={columns}
           actions={actions}
           searchKey="name"
           searchable
           selectable
           pagination
           pageSize={3}
         />
       </div>
     </div>
   );
}