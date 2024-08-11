
import { apiClient, clearDetails } from "./config";

export const apiSignUp = async(payload) =>{
    return apiClient.post("/auth/users/register", payload);
}

export const apiLogIn = async(payload) =>{
    return apiClient.post("/auth/users/login" , payload);
}

export const apiCheckUsernameExists = async(userName) => {
    return apiClient.get(`/auth/${userName}`);
 }