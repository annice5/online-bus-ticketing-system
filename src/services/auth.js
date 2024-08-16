
import { apiClient, clearDetails } from "./config";

export const apiSignUp = async(payload) =>{
    return apiClient.post("/auth/users/register", payload);
}
export const apiSignUpAdmin = async(payload) =>{
    return apiClient.post("/auth/operator/register", payload);
}



export const apiLogIn = async(payload) =>{
    return apiClient.post("/auth/users/login" , payload);
}
export const apiLogInAdmin = async(payload) =>{
    return apiClient.post("/auth/operator/login" , payload);
}

export const apiCheckUsernameExistsAdmin = async(userName) => {
    return apiClient.get(`/auth/${userName}`);
 }

 export const apiLogout = async () => {
    clearDetails();
  };
