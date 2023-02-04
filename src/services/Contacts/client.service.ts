import { ClientAPIService } from "@/services";
import { Client } from "@/models";
import { AxiosResponse } from "axios";

export default class ClientService {
  public static baseEndpoint = "clients";

  public async get(): Promise<AxiosResponse<Client[]>> {
    return await ClientAPIService.get(ClientService.baseEndpoint);
  }

  public async post(data: Client): Promise<AxiosResponse<Client>> {
    return await ClientAPIService.post(ClientService.baseEndpoint, data);
  }

  public async put(data: Client): Promise<AxiosResponse<Client>> {
    return await ClientAPIService.put(ClientService.baseEndpoint, data);
  }

  public async updateValue(
    id: string,
    value: number
  ): Promise<AxiosResponse<Client>> {
    return await ClientAPIService.put(
      `${ClientService.baseEndpoint}/update-value`,
      {
        id,
        value,
      }
    );
  }

  public async delete(id: string): Promise<AxiosResponse<Client>> {
    return await ClientAPIService.delete(`${ClientService.baseEndpoint}/${id}`);
  }
}
