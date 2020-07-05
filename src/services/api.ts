import axios from "axios";

export interface REACT_APP_API_URL {
  [key: string]: string | undefined;
}

const api = axios.create({
  baseURL: "http://192.168.0.22:3333",
});

export default api;
