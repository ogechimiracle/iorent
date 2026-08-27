import { IoIosSpeedometer, IoIosStar } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { GiGears } from "react-icons/gi";
import { BsFuelPumpFill } from "react-icons/bs";
import { PiSeatFill } from "react-icons/pi";
import Image from "next/image";

interface CardProps {
  ImageUrl: string;
  name: string;
  price: number;
  location: string;
  milage: string;
  seats: number;
  gear_type: string;
  gas_type: string;
  //  review?: object
}

export default function Card({
  ImageUrl,
  name,
  price,
  location,
  milage,
  seats,
  gear_type,
  gas_type,
}: CardProps) {
  return (
      <div className="border border-[#dde1de] dark:border-none  rounded-[20px] p-0 relative hover:shadow-xl transform transition-transform duration-800 hover:-translate-y-1.5">
        <div className="w-full h-[250px] rounded-t-[20px] relative">
          <Image
            src={ImageUrl}
            fill
            alt=""
            className=" object-cover rounded-t-[20px]"
          />
          <p className="bg-white dark:bg-black w-[140px] dark:text-white text-black text-[14px] text-center gap-2 rounded-[30px] relative top-[16em] left-[10em] z-40 border border-[#dde1de] dark:border-none flex items-center">
            <IoIosStar className="text-[#70f46d] ml-1" />
            4.96{" "}
            <span className="text-[12px] text-[#6f7073] font-semibold">
              (674 reviews)
            </span>
          </p>
        </div>
        <div className="w-full dark:bg-[#313131] bg-white p-4 rounded-b-[20px] rounded-t-[10px] overflow-hidden mb-5 pl-[30px] mb-0 relative bottom-4">
          <p className="dark:text-white text-black text-[24px] font-bold mt-5 hover:text-green-800 cursor-pointer">
            {name}
          </p>
          <p className="text-[#6f7073] text-[14px] mt-3 flex items-center gap-2">
            <IoLocationSharp className="text-black text-[18px]" />
            {location}
          </p>{" "}
          <hr className="border border-[#dde1de] dark:border-none border-[0.5px] mt-4" />
          <p className="dark:text-white text-black mt-5 flex items-center gap-2 text-[15px]">
            <IoIosSpeedometer />
            {milage} miles{" "}
            <span className="ml-10 flex items-center gap-2">
              <GiGears />
              {gear_type}
            </span>
          </p>
          <p className="dark:text-white text-black  mt-3 gap-2 flex items-center text-[15px]">
            <BsFuelPumpFill />
            {gas_type}{" "}
            <span className="ml-24 flex items-center gap-2">
              <PiSeatFill />
              {seats} seats
            </span>
          </p>
          <div className="mt-8 flex gap-20 items-center mb-5">
            <p className="dark:text-white text-black font-semibold ">
              <span className="text-[#6f7073] text-[13px]">from</span> ${price}
            </p>
            <button className="dark:bg-[#222222] bg-white dark:text-white text-black py-2.5 px-3 rounded-xl hover:bg-[#70f46d] cursor-pointer hover:text-black shadow-lg border border-[#dde1de] dark:border-none text-xs">
              Book Now
            </button>
          </div>
        </div>
      </div>
   
  );
}
