import { Country } from "./interfaces";


export const postDataToApi = async ({url, country}: {url: string, country: Country}): Promise<Country | string> => {
  try {
    const response: Response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(country),
    });

    if(!response.ok){
      const resData:{message:string}=await response.json();
      throw new Error(resData.message);
    }

    const data: Country = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
