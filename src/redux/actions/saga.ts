import axios from "axios";
import { call, put } from "redux-saga/effects";

import { AddCountryAction, Country, GetSelectedCountryAction } from "./interfaces";
import { postDataToApi } from "./api";
import { fetchCountriesSuccess, addCountrySuccess } from "../countrySlice";


export function* fetchCountriesSaga(action: GetSelectedCountryAction) {
  let url: string = "http://localhost:3002/countries";
  if(action.payload) {
    url = url + "/" + action.payload;
  }
  try {
    const response = yield call(axios, url);
    const data: Country[] = response.data;
    yield put(fetchCountriesSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

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
