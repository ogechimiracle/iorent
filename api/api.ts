import axios from 'axios'

const api = axios.create({
   baseURL: "http://localhost:5050/api/v1",
   headers:{
      "Content-Type":"application/json",
      Accept: "application/json"
   },
   timeout: 15000,
})

export default api