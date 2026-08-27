import Image from "next/image";
import Link from "next/link";


export default function PageNotFound(){
     return(
          <div className="flex w-full h-screen items-center justify-center flex-col">
               <Image src="/images/404.png" width={100} height={100} alt="not found" className="w-100"/>
               <h1 className="text-black dark:text-gray-100 font-extrabold text-3xl">Page Not Found</h1>
               <div className="lg:max-w-[30%] text-center py-3">
                    <p className="dark:text-gray-400">the page you are looking for dose not exit or an other error occured, Go back or head over to <span className="text-red-500"><Link href="/">Home</Link></span></p>
               </div>
          </div>
     )
}