import axios from "axios";
import NetInfo from "@react-native-community/netinfo";
import {ServiceResponse, ServiceStatus, ServiceStatusException} from "./model";

export class GenericService {
  static makeGetRequest = async <ResponseType>(
    url: string,
    params: {[key: string]: string} = {},
    headers: {[key: string]: string} = {}
  ): Promise<ServiceResponse<ResponseType>> =>
    GenericService.makeRequest<ResponseType>(url, "get", headers, params);

  static makePostRequest = async <ResponseType>(
    url: string,
    params: {[key: string]: string} = {},
    headers: {[key: string]: string} = {}
  ): Promise<ServiceResponse<ResponseType>> =>
    GenericService.makeRequest<ResponseType>(url, "post", headers, params);

  private static makeRequest = async <ResponseType>(
    url: string,
    method: "post" | "get",
    headers: {[key: string]: string},
    value: {}
  ): Promise<ServiceResponse<ResponseType>> => {
    try {
      const response = await axios({
        method,
        url,
        headers,
        data: method === "post" ? value : null,
        params: method === "get" ? value : null,
      });

      return {
        response: response.data.data,
      };
    } catch {
      const fetch = await NetInfo.fetch();

      throw new ServiceStatusException(
        fetch.isConnected ? ServiceStatus.exception : ServiceStatus.noInternetConnection
      );
    }
  };
}
