import { AxiosRequestConfig, AxiosResponse } from "axios";
import ClientAPI from "./clientAPI";

const clientAPI = ClientAPI();
export default class clientAPIService {
  public static async get<T = unknown, D = unknown>(
    requestURL: string,
    config?: AxiosRequestConfig<D>
  ): Promise<AxiosResponse<T>> {
    return clientAPI.get(requestURL, config);
  }

  public static async post<T = unknown, D = unknown>(
    requestURL: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<AxiosResponse<T>> {
    return clientAPI.post(requestURL, data, config);
  }

  public static async put<T = unknown, D = unknown>(
    requestURL: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<AxiosResponse<T>> {
    return clientAPI.put(requestURL, data, config);
  }

  public static async delete<T = unknown, D = unknown>(
    requestURL: string,
    config?: AxiosRequestConfig<D>
  ): Promise<AxiosResponse<T>> {
    return clientAPI.delete(requestURL, config);
  }
}
