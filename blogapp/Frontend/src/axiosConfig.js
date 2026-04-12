import axios from "axios";

const axiosInstance = axios.create({
  // Uses VITE_API_URL env var (set on Vercel Frontend), defaults to Render Backend
  baseURL: import.meta.env.VITE_API_URL || "https://blogapp-jkx5.onrender.com",
  withCredentials: true,
});

export default axiosInstance;
