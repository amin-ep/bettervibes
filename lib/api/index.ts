import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: process.env.NODE_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

const onError = (err: unknown) => {
  const error = err as AxiosError<ErrorResponse>;
  return {
    status: "fail",
    message: error.response?.data.message || "Something went wrong",
  };
};
export { onError };
export default api;
