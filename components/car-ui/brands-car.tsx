import type { IconType } from "react-icons";

interface BrandProps {
  name: string;
  logo: IconType;
}

export default function CardBrandCard({ name, logo }: BrandProps) {
     const Icon = logo
  return (
    <div className=" w-40 mx-3 rounded-lg bg-white dark:bg-lightgray  border-[1.2px] dark:border-0  border-gray-400 px-5 py-4 cursor-pointer shadow-md flex flex-col items-center gap-y-2 justify-center">
     <Icon className="size-10 dark:text-gray-200  " title={name}/>
     <small>{name}</small>
    </div>
  );
}
