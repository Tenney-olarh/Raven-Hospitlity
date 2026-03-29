import axios from "axios";

const api = axios.create({
  baseURL: "https://raven-v2.vercel.app/api",
  headers: {
    "Content-Type": "application/json"
  }
});

export default api;