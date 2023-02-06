import ClientAPIService from "../../services/clientAPI.service";
import Contact from "../../models/contact";
import { AxiosResponse } from "axios";

export default class ContactService {
  public static baseEndpoint = "clients";

  public async get(): Promise<AxiosResponse<Contact[]>> { //puxa informação
    return await ClientAPIService.get(ContactService.baseEndpoint);
  }

  public async post(data: Contact): Promise<AxiosResponse<Contact>> { //cria
    return await ClientAPIService.post(ContactService.baseEndpoint, data);
  }

  public async put(data: Contact): Promise<AxiosResponse<Contact>> { //sobrescreve
    return await ClientAPIService.put(ContactService.baseEndpoint, data);
  }

  public async updateValue(
    id: string,
    value: number
  ): Promise<AxiosResponse<Contact>> {
    return await ClientAPIService.put(
      `${ContactService.baseEndpoint}/update-value`,
      {
        id,
        value,
      }
    );
  }

  public async delete(id: string): Promise<AxiosResponse<Contact>> {
    return await ClientAPIService.delete(
      `${ContactService.baseEndpoint}/${id}`
    );
  }
}
