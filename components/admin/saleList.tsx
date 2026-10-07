
interface saleListProps{
   img:string,
   name:string,
   brand:string
}

export default function SalesList({img, name, brand}:saleListProps){
   return(
      <div className="w-full rounded-lg flex items-center border">
         <img src={img} alt="" className="size-12 rounded-full " />
         <div>
            <p className="text-md font-semibold ">{name}</p>
            <small>{brand}</small>
         </div>
      </div>
   )
}