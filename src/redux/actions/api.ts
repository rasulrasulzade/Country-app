import axios, { AxiosResponse } from "axios";

import { Country } from "./interfaces";

interface Iobj {
  url: string,
  data: Country
}

export const postDataToApi = async (obj: Iobj): Promise<any> => {
  try {
    const response: any = axios.post(obj.url, obj.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
