import axios from "axios";

const api = axios.create({
  baseURL: "http://18.231.4.115:3333/api",
});

export default api;
