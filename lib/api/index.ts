import axios from "axios";

const api = axios.create({
  baseURL: process.env.NODE_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default api;
