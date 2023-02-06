import axios, { AxiosInstance } from "axios";

function clientAPI(): AxiosInstance {
  const baseURL = `http://localhost:8000/`;
  const api = axios.create({ baseURL });

  return api;
}

export default clientAPI;
