import api from "./api";

export const CreateAccount = async(data:any)=>{
   try {
      const res = await api.post('/auth/create',data)
      return res.data
   } catch (error) {
      console.error(error)
      throw error
   }
}

export const LoginUser = async(data:any)=>{
   try {
      const res = await api.post('/auth/login',data)
      return res.data
   } catch (error) {
      console.error(error)
      throw error
   }
}