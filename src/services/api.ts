import axios from "axios";

const api = axios.create({
  baseURL: "https://gifts-gg-backend.vercel.app/api",
});

export default api;
