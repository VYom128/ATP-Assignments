import axios from "axios";

const axiosInstance = axios.create({
  // If you set VITE_API_URL in Vercel, it uses that. Otherwise, it uses your Render link.
  baseURL: import.meta.env.VITE_API_URL || "https://blogapp-ajamoepw6-vyomt128s-projects.vercel.app",
  withCredentials: true,
});

export default axiosInstance;