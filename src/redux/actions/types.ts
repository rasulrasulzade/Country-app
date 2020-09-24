import { GetCountriesSuccessAction, AddCountrySuccessAction} from "./interfaces";

export enum ActionTypes {
  FETCH_COUNTRIES_REQUESTED = "FETCH_COUNTRIES_REQUESTED",
  FETCH_COUNTRIES_SUCCESS = "FETCH_COUNTRIES_SUCCESS",
  ADD_COUNTRY_REQUESTED = "ADD_COUNTRY_REQUESTED",
  ADD_COUNTRY_SUCCESS = "ADD_COUNTRY_SUCCESS",
}

export type Action = GetCountriesSuccessAction | AddCountrySuccessAction;
