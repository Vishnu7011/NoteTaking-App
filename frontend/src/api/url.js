import axios from "axios";

const BACKEND_URL = axios.create({
  baseURL: "https://notetaking-app-vjuk.onrender.com"
});

export default BACKEND_URL;