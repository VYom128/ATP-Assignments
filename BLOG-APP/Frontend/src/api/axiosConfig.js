import axios from "axios";

const axiosInstance = axios.create({
  // This uses the Vercel variable if it exists, otherwise localhost for your testing
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",
  withCredentials: true,
});

export default axiosInstance;