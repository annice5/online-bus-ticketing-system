import { apiClient } from "./config";

export const apiGetBookings = async (id) => {
  return apiClient.get(`/users/bus/bookings/${id}`);
};

export const apiAddBookings = async (payload) => {
  return apiClient.post("/bookings", payload);
};

export const apiUpdateBookings = async (id, payload) => {
  return apiClient.patch(`/bookings/${id}`, payload);
};

export const apiDeleteBookings = async (id) => {
  return apiClient.delete(`/bookings/${id}`);
};

export const apiGetBooking = async () => {
  return apiClient.get("/operator/buses/bookings/");
};
