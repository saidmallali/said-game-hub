import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstane = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1792d11a7f46497f810ad0ffb5540c9b",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstane
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  getOne = (id: number | string) => {
    return axiosInstane
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
}

export default APIClient;
