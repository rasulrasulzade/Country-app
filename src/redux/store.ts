import {
  combineReducers,
  createStore,
  applyMiddleware,
} from "redux";
import createSagaMiddleware from "redux-saga";
import { all, takeLatest } from "redux-saga/effects";

import { ActionTypes, StoreState, getCountriesSaga, addCountrySaga } from "./actions";
import countriesReducer from "./reducers/countriesReducer";

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

const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;

};
export default configureStore;
