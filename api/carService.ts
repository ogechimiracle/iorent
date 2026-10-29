import api from "./api";

export const createCarCategory = async(data:any)=>{
   const res = await api.post('/cars/create/category',data)
   const d = await res.data
   return d
}

export const getAllCategory = async()=>{
   const res = await api.get('/cars/categories')
   const d = await res.data
   return d
}

export const createMake = async(data:any)=>{
   const res = await api.post('/cars/create/make',data)
   const d = await res.data
   return d
}

export const getAllCarMake = async () => {
   const res = await api.get('/cars/make')
   const d = await res.data
   return d
}