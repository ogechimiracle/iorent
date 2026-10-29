
import api from "./api";
import type { AxiosRequestConfig } from "axios";

export const apiService = {
   
   async get<T>(
      url: string,
      config?: AxiosRequestConfig,
   ): Promise<T> {
      const response = await api.get<T>(url, config);
      return response.data;
   },

   async post<T, D = unknown>(
      url: string,
      data?: D,
      config?: AxiosRequestConfig,
   ): Promise<T> {
      const response = await api.post<T>(url, data, config);
      return response.data;
   },

   async put<T, D = unknown>(
      url: string,
      data?: D,
      config?: AxiosRequestConfig,
   ): Promise<T> {
      const response = await api.put<T>(url, data, config);
      return response.data;
   },

   async patch<T, D = unknown>(
      url: string,
      data?: D,
      config?: AxiosRequestConfig,
   ): Promise<T> {
      const response = await api.patch<T>(url, data, config);
      return response.data;
   },

   async delete<T>(
      url: string,
      config?: AxiosRequestConfig,
   ): Promise<T> {
      const response = await api.delete<T>(url, config);
      return response.data;
   },
};
