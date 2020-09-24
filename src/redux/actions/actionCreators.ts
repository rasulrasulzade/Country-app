import axios from "axios";
import { call, put } from "redux-saga/effects";

import { ActionTypes } from "./types";
import {
  GetCountriesAction,
  GetCountriesSuccessAction,
  AddCountryAction,
  AddCountrySuccessAction,
  Country,
} from "./interfaces";
import {postDataToApi} from "./api";

export const getCountries = (): GetCountriesAction => {
  return { type: ActionTypes.FETCH_COUNTRIES_REQUESTED };
};

const getCountriesSuccess = (data: Country[]): GetCountriesSuccessAction => {
  return { type: ActionTypes.FETCH_COUNTRIES_SUCCESS, payload: data };
};

export function* getCountriesSaga() {
  const url: string = "http://localhost:3002/countries";
  try {
    const response = yield call(axios, url);
    const data: Country[] = response.data
    yield put(getCountriesSuccess(data));
  } catch (e) {
    console.log(e);
  }
}


export const addCountry = (country: Country): AddCountryAction => {
  return { type: ActionTypes.ADD_COUNTRY_REQUESTED, payload: country}
} 

const addCountrySuccess = (country: Country): AddCountrySuccessAction => {
  return { type: ActionTypes.ADD_COUNTRY_SUCCESS, payload: country}
} 

export function* addCountrySaga(action: AddCountryAction) {
  const url: string = "http://localhost:3002/countries";
  try {
    const data = yield call(postDataToApi, {url: url, data: action.payload})
    yield put(addCountrySuccess(data))
  } catch(e) {
    console.log(e)
  }
}