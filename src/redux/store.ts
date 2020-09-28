import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { all, takeLatest } from "redux-saga/effects";
import { configureStore } from "@reduxjs/toolkit";

import {
  ActionTypes,
  StoreState,
  getCountriesSaga,
  addCountrySaga,
} from "./actions";
import countriesReducer from "./countrySlice";

function* rootSaga() {
  yield all([
    takeLatest(ActionTypes.FETCH_COUNTRIES_REQUESTED, getCountriesSaga),
    takeLatest(ActionTypes.ADD_COUNTRY_REQUESTED, addCountrySaga),
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
