import { ActionTypes } from "./types";

export interface Country {
  id: number;
  name: string;
  capital: string;
  area: number;
  population: number;
  img: string;
}

export interface GetCountriesAction {
  type: ActionTypes.FETCH_COUNTRIES_REQUESTED;
}
export interface GetCountriesSuccessAction {
  type: ActionTypes.FETCH_COUNTRIES_SUCCESS;
  payload: Country[];
}

export interface AddCountryAction {
  type: ActionTypes.ADD_COUNTRY_REQUESTED,
  payload: Country
}
export interface AddCountrySuccessAction {
  type: ActionTypes.ADD_COUNTRY_SUCCESS,
  payload: Country
}
export interface StoreState {
  countries: Country[];
}
