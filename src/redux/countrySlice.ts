import { createSlice } from "@reduxjs/toolkit";

import { Country, Action, StoreState } from "./actions";

const countrySlice = createSlice({
  name: "countries",
  initialState: [],
  reducers: {
    fetchCountries(state: StoreState, action: Action): Country[] {
      return action.payload;
    },
    addCountrySuccess(state: StoreState, action: Action): Country[] {
      return [...state, action.payload];
    },
  },
});

export const { fetchCountries, addCountrySuccess } = countrySlice.actions;
export default countrySlice.reducer;
