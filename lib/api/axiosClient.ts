import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.NODE_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axiosClient;
