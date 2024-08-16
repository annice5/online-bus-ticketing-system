import { apiClient } from "./config";


export const apiGetBus = async(id,payload) =>{
  return apiClient.get(`/operator/buses/${id}`, payload)
   };   

export const apiAddBus = async (payload) => {
    return apiClient.post("/operator/buses" , payload);
    };

    
export const apiUpdateBus = async (id, payload) => {
     return apiClient.patch(`/operator/buses/${id}`, payload);
     };

export const apiDeleteBus = async(id) => {
     return apiClient.delete(`/operator/buses/${id}`);
     };