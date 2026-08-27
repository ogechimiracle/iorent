'use client'

import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail, IoMdPerson } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { TbSteeringWheelFilled } from "react-icons/tb";
import { PiSquaresFourLight } from "react-icons/pi";
import { MdOutlineWbSunny } from "react-icons/md";
import ThemeToggle from "./theme-toggle";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NavLinks } from "@/utils/constant";



export default function Header1() {

  const path = usePathname()
  const [scrolled, setScrolled] = useState<boolean>(false)

  useEffect(()=>{

    const handleScroll = ()=>{
      if(window.scrollY > 40){
        setScrolled(true)
      }else{
        setScrolled(false)
      }
    }

    window.addEventListener("scroll",handleScroll)

    return ()=>{
      window.removeEventListener("scroll", handleScroll)
    }

  },[])


  return (
    <div className="">
      <header className={`bg-transparent ${path === "/"? 'fixed top-0 right-0 left-0 z-30':'relative'}`}>
        <div className={` ${scrolled ? 'hidden':'flex'} border-b-[0.25px] border-[#b0abab] px-3 py-2  item-center justify-between`}>
          <div className="flex text-white gap-5 text-[13px]">
            <p className="flex gap-2 items-center">
              <FaPhoneAlt /> +2348063577401
            </p>
            <p className="flex gap-2 items-center">
              <IoIosMail /> montfortv22@gmail.com
            </p>
          </div>
          <div className="flex gap-3">
            <p className="text-white text-[13px]">
              More than <span className="text-[15px] text-[#70f46d]">800+</span>{" "}
              special collection cars in this summer
            </p>
            <button className="bg-[#70f46d] px-3 rounded-[20px] cursor-pointer flex items-center gap-2 text-[12px] font-semibold">
              Access Now <FaArrowRightLong />
            </button>
          </div>
          <div className="flex item-center justify-center text-white text-[13px]">
            <p className="px-3">EN</p>
            <p className="px-3 border-r border-[#b0abab] border-l p">USD</p>
          </div>
        </div>
        <div
          className={`border-b  px-3 py-3 flex items-center justify-between ${path === "/"  ? "border-white text-white" : "border-slate-600 dark:border-slate-500 bg-white dark:text-white dark:bg-slate-800 text-black"} ${scrolled && path === "/" ? 'bg-green-800':''}`}
        >
          <div className="flex item-center">
            <div className="px-5"></div>
            <p className="font-bold  text-[30px] flex gap-2">
              <TbSteeringWheelFilled className="size-12 text-[#70f46d]" />{" "}
              Carento
            </p>
          </div>
          <div className=" flex gap-5 items-center">
            {NavLinks.map((items:any, index:number)=>(
              <Link key={items.title} href={items.url} className={`${path === items.url ? 'text-green-500 underline underline-offset-8':''}`}>{items.title}</Link>
            ))}
          </div>
          <div className="flex gap-3">
            <Link
              href="/login"
              className=" rounded-[10px] text-[13px] px-3 py-2 font-medium cursor-pointer hover:bg-[#70f46d] flex gap-1 items-center"
            >
              <IoMdPerson className="size-4" />
              Sign in
            </Link>
            <ThemeToggle />
            <div className="py-1 px-2 bg-[#70f46d] rounded-[10px] flex items-center">
              <PiSquaresFourLight className="size-5" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
