import axios from "axios";

const createAxiosInstance = () => {
  const instance = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL_API}`,
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("bearer_token");
      if (token) {
        config.headers.Authorization = `${token}`;
      }

      return config;
    },
    (error) => Promise.reject(error)
  );
  return instance;
};
export default createAxiosInstance;
