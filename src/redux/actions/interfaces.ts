import { ActionTypes } from "./types";

export interface Country {
  id: number;
  name: string;
  capital: string;
  area: string;
  population: string;
  img: string;
}

export interface GetCountriesAction {
  type: ActionTypes.FETCH_COUNTRIES_REQUESTED;
}

export interface GetSelectedCountryAction {
  type: string,
  payload: string,
}

export interface AddCountryAction {
  type: ActionTypes.ADD_COUNTRY_REQUESTED,
  payload: Country
}

export interface StoreState {
  countries: Country[];
}
