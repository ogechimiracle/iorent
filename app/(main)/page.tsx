'use client'

import { IoIosSearch, IoIosCheckmarkCircle } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import HeroSearch from "@/components/heroSearch";
import Card from "@/components/card";
import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { carBrands } from "@/utils/brands";
import CardBrandCard from "@/components/car-ui/brands-car";
import Marquee from "react-fast-marquee";
import SectionHead from "@/components/car-ui/sectionHead";





export default function Section() {
  return (
    <div className="">
      <div className="absolute top-0 w-full lg:h-[95%] bg-[url('/images/hero1.jpeg')] bg-cover bg-center bg-no-repeat">
        <div className="bg-black/50 w-full h-full">
          <div className="w-[700px] ml-[100px]  h-full flex flex-col justify-center">
            <p className="text-[#70f46d] font-medium text-[16px]">
              Find Your Perfect Car
            </p>
            <h1 className="text-white font-bold text-[50px]">
              Looking for a vehicle? <br />
              You’re in the perfect spot.
            </h1>
            <div className="flex text-white gap-5 font-medium text-[13px] mt-[30px]">
              <p className="flex items-center gap-1">
                <IoIosCheckmarkCircle className="size-6 text-[#70f46d]" />
                High quality at a low cost
              </p>
              <p className="flex items-center gap-1">
                <IoIosCheckmarkCircle className="size-6 text-[#70f46d]" />
                Premium services.
              </p>
              <p className="flex items-center gap-1">
                <IoIosCheckmarkCircle className="size-6 text-[#70f46d]" />
                24/7 roadside support.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" relative mt-[41em] w-full flex items-center justify-center"></div>

      <div className="dark:bg-ourgray">
        <div className="px-5 lg:px-22 py-8 ">
          <div className="flex w-full items-center justify-center">
            <div className="lg:w-[60%] -mt-10">
              <HeroSearch />
            </div>
          </div>

          <SectionHead
            title="Premium Brands"
            subtitle="Unveil the finest selection of high end vehicle"
            actionText="See All"
            url="/"
          />

          <Marquee pauseOnHover={true} className="flex gap-x-5 mt-8">
            {carBrands.map((items, index) => (
              <CardBrandCard key={index} logo={items.icon} name={items.name} />
            ))}
          </Marquee>
        </div>
      </div>

      <div className="px-5 lg:px-22 mt-5 py-8">
        <SectionHead
          title="Most Searched Vehicles"
          subtitle="The world's leading car brands"
        />

        <div className="mt-4 grid grid-cols-1 lg:grid-cols-4 gap-x-5 gap-y-4">
          <Card
            ImageUrl="/images/hero1.jpeg"
            gas_type="Feul"
            gear_type="Automatic"
            location="Abuja"
            milage="34899"
            seats={8}
            name="Toyota HighLander"
            price={345000}
          />

          <Card
            ImageUrl="/images/hero1.jpeg"
            gas_type="Feul"
            gear_type="Automatic"
            location="Abuja"
            milage="34899"
            seats={8}
            name="Toyota HighLander"
            price={345000}
          />

          <Card
            ImageUrl="/images/hero1.jpeg"
            gas_type="Feul"
            gear_type="Automatic"
            location="Abuja"
            milage="34899"
            seats={8}
            name="Toyota HighLander"
            price={345000}
          />

          <Card
            ImageUrl="/images/hero1.jpeg"
            gas_type="Feul"
            gear_type="Automatic"
            location="Abuja"
            milage="34899"
            seats={8}
            name="Toyota HighLander"
            price={345000}
          />
          
        </div>
      </div>

      <div className="px-5 lg:px-22 mt-5">
        <h1>Our blog </h1>
        <p>thnsndcnsdkncksdncknsdkcnksn</p>
      </div>

      <div className="px-5 lg:px-22 mt-5">
        <h1>Our gallary </h1>
        <p>thnsndcnsdkncksdncknsdkcnksn</p>
      </div>
    </div>
  );
}
