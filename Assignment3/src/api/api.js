import axios from "axios";

const api = axios.create({
  baseURL: "https://comp229-401-assignment2-13ks.onrender.com/api"
});

export default api;