import axios from "axios";

const axiosInstance = axios.create({
  // This uses the Vercel variable if it exists, otherwise localhost for your testing
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",
  withCredentials: true,
});

// Add request interceptor to handle FormData properly
axiosInstance.interceptors.request.use((config) => {
  // Let browser set Content-Type for FormData
  if (config.data instanceof FormData) {
    delete config.headers["Content-Type"];
  }
  return config;
});

export default axiosInstance;
