import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

console.log("API", BASE_URL);
console.log("23423", process.env.NEXT_PUBLIC_SECRET_TOKEN);

const $axios = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

$axios.interceptors.request.use((config) => {
  config.headers["secret-token"] = process.env.NEXT_PUBLIC_SECRET_TOKEN;
  return config;
});

export default $axios;
