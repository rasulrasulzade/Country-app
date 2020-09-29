import { Country } from "./interfaces";

export enum ActionTypes {
  FETCH_COUNTRIES_REQUESTED = "FETCH_COUNTRIES_REQUESTED",
  FETCH_SELECTED_COUNTRY_REQUESTED = "FETCH_SELECTED_COUNTRY_REQUESTED",
  ADD_COUNTRY_REQUESTED = "ADD_COUNTRY_REQUESTED",
}

export type Action = { type: string; payload: Country[] | Country };
