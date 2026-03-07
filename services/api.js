import axios from "axios";

const API = axios.create({
  baseURL: "https://satka-matka.onrender.com/api/v1/users",
});

export default API;
