import {ActionTypes, Action, Country} from "../actions";

const countriesReducer = (state: Country[]  = [], action: Action) => {
    switch(action.type) {
        case ActionTypes.FETCH_COUNTRIES_SUCCESS:
            return action.payload
        case ActionTypes.ADD_COUNTRY_SUCCESS:
            return [...state, action.payload]
        default:
            return state;
    }
}

export default countriesReducer;