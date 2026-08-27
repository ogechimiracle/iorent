import { FaAngleDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

export default function HeroSearch(){
     return (
       <div className="bg-white dark:bg-slate-900 shadow-lg p-5  rounded-lg relative ">
         <div className="flex items-center justify-between">
           <div className="flex items-center gap-3">
             <button className="bg-[#5edd5b] px-3 py-2 rounded-[10px] cursor-pointer hover:bg-[#70f46d] text-[13px] font-medium  dark:text-gray-100">
               All cars
             </button>
             <button className="text-black dark:text-gray-100 px-3 py-2 rounded-[10px] cursor-pointer hover:bg-[#70f46d] hover:text-black text-[13px] font-medium">
               New cars
             </button>
             <button className="text-black px-3 py-2 rounded-[10px] cursor-pointer hover:bg-[#70f46d] hover:text-black text-[13px] font-medium  dark:text-gray-100">
               Used cars
             </button>
           </div>
           <div>
             <p className="text-[#737373]  dark:text-gray-100 hover:text-[#11ab59] cursor-pointer text-[13px] font-medium">
               Need help?
             </p>
           </div>
         </div>
         <div className="border border-[#808080] rounded-[20px] p-5 mt-5 flex gap-5 justify-evenly">
           <div>
             <p className="text-[#737373]  dark:text-gray-100 text-[13px] font-medium mb-2">
               Pick Up Location
             </p>
             <p className="text-black  dark:text-gray-100 font-bold text-[14px] flex items-center gap-1">
               New York, USA
               <FaAngleDown />
             </p>
           </div>{" "}
           <hr className="bg-[#808080] w-[0.5px] h-[50px]" />
           <div>
             <p className="text-[#737373]  dark:text-gray-100 text-[13px] font-medium mb-2">
               Drop Off Location
             </p>
             <p className="text-black  dark:text-gray-100 font-bold text-[14px]">
               Dalas Texas, USA
             </p>
           </div>{" "}
           <hr className="bg-[#808080] w-[0.5px] h-[50px]" />
           <div>
             <p className="text-[#737373]  dark:text-gray-100 text-[13px] font-medium mb-2">
               Pick Up Date & Time
             </p>
             <p className="text-black  dark:text-gray-100 font-bold text-[14px] border border-[#808080] px-1">
               Thu, Oct 01 2024
             </p>
           </div>{" "}
           <hr className="bg-[#808080] w-[0.5px] h-[50px]" />
           <div>
             <p className="text-[#737373]  dark:text-gray-100 text-[13px] font-medium mb-2">
               Return Date & Time
             </p>
             <p className="text-black  dark:text-gray-100 font-bold text-[14px] border border-[#808080] px-1">
               Mon, Oct 07 2024
             </p>
           </div>
           <div className="flex item-center">
             <button className="px-4 py-2 gap-1 cursor-pointer bg-[#5edd5b] hover:bg-[#70f46d] rounded-[10px] font-medium text-[14px] flex items-center">
               <IoIosSearch className="size-7" />
               Find a Vehicle
             </button>
           </div>
         </div>
       </div>
     );
}