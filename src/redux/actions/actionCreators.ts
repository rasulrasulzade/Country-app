import axios from "axios";
import { call, put } from "redux-saga/effects";

import { ActionTypes } from "./types";
import {
  GetCountriesAction,
  AddCountryAction,
  Country,
} from "./interfaces";
import { postDataToApi } from "./api";
import { fetchCountries, addCountrySuccess } from "../countrySlice";

export const getCountries = (): GetCountriesAction => {
  return { type: ActionTypes.FETCH_COUNTRIES_REQUESTED };
};

export function* getCountriesSaga() {
  const url: string = "http://localhost:3002/countries";
  try {
    const response = yield call(axios, url);
    const data: Country[] = response.data;
    yield put(fetchCountries(data));
  } catch (e) {
    console.log(e);
  }
}

export const addCountry = (country: Country): AddCountryAction => {
  return { type: ActionTypes.ADD_COUNTRY_REQUESTED, payload: country };
};


export function* addCountrySaga(action: AddCountryAction) {
  const url: string = "http://localhost:3002/countries";
  try {
    const data = yield call(postDataToApi, {
      url: url,
      country: action.payload,
    });
    yield put(addCountrySuccess(data));
  } catch (e) {
    console.log(e);
  }
}
