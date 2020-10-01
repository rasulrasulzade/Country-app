import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { all, takeLatest } from "redux-saga/effects";
import { configureStore } from "@reduxjs/toolkit";

import {
  StoreState,
  fetchCountriesSaga,
  addCountrySaga,
} from "./actions";
import countriesReducer from "./countrySlice";
import {fetchCountries, addCountry} from "./countrySlice";

function* rootSaga() {
  yield all([
    takeLatest(fetchCountries, fetchCountriesSaga),
    takeLatest(addCountry, addCountrySaga),
  ]);
}

const rootReducer = combineReducers<StoreState>({
  countries: countriesReducer,
});

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const configureAppStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [...middlewares],
  });
  sagaMiddleware.run(rootSaga);
  return store;
};
export default configureAppStore;
