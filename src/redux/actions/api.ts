import { Country } from "./interfaces";


export const postDataToApi = async ({url, country}: {url: string, country: Country}): Promise<any> => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(country),
    });

    const data: Country = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
