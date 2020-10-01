import { createSlice } from "@reduxjs/toolkit";

import { Country, Action, StoreState } from "./actions";

const countrySlice = createSlice({
  name: "countries",
  initialState: [],
  reducers: {
    fetchCountries(state, action: Action): any {
      return action.payload;
    },
    fetchCountriesSuccess(state, action: Action): any {
      return action.payload;
    },
    addCountry(state, action: Action): any {
      return [...state, action.payload];
    },
    addCountrySuccess(state, action: Action): any {
      return [...state, action.payload];
    },
  },
});

export const {
  fetchCountries,
  fetchCountriesSuccess,
  addCountry,
  addCountrySuccess,
} = countrySlice.actions;
export default countrySlice.reducer;
