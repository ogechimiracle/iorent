import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";

interface SectionProps{
     title: string,
     subtitle:string,
     url?:string,
     actionText?: string

}

export default function SectionHead({title, url, subtitle, actionText}:SectionProps){
     return (
       <div>
         <h1 className="text-3xl mt-5 font-bold text-black dark:text-gray-100 ">
           {title}
         </h1>

         <div className="flex items-center justify-between">
           <p className="font-light dark:text-gray-400 text-gray-500 text-sm lg:text-md">
             {subtitle}
           </p>
           {actionText && (
             <Link
               href={url || "/"}
               className="flex items-center lg:space-x-2 hover:text-green-400 dark:hover:text-green-400 transition-all ease-in-out duration-200"
             >
               <span className="text-xs lg:text-md">{actionText}</span>
               <MdOutlineArrowRightAlt  className="lg:text-4xl text-xs" />
             </Link>
           )}
         </div>
       </div>
     );
}