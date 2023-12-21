import axios, { AxiosRequestConfig } from "axios";
import { Game } from "../entities/Game";

export interface FetchResponse<T> {
  count: number;
  next?: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c1edfc06ce3c433fa078ceaf6cd6d946",
  },
});

class APIClient<T>{
  endpoint: string;
  
  constructor(endpoint: string ) {
    this.endpoint = endpoint
  }
  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get<FetchResponse<T>>(this.endpoint, config)
    .then(res => res.data)
  }
  get = (id: number | string) => {
    return axiosInstance.get<T>(this.endpoint + '/' + id)
    .then(res => res.data)
  }
}

export default APIClient;


