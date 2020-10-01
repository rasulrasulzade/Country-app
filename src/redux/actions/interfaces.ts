export interface Country {
  id: number;
  name: string;
  capital: string;
  area: string;
  population: string;
  img: string;
}

export interface GetCountriesAction {
  type: string;
}

export interface GetSelectedCountryAction {
  type: string,
  payload: string,
}

export interface AddCountryAction {
  type: string,
  payload: Country
}

export interface StoreState {
  countries: Country[];
}
