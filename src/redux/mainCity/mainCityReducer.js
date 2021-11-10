import * as type from "./mainCity.types";


const initial_state = {
    searchFor: {name: "Tel Aviv", key: 215854}
};

export default function mainCityReducer(state = initial_state, action){
    switch(action.type){
      case type.SET_SEARCH:
        return {
          ...state,
          searchFor: action.payload
        }
      case type.GET_CITY_REQUESTED:
        return {
          ...state,
          loading: true,
          error: null
        }
        case type.GET_CITY_SUCCESS:
            return {
              ...state,
              mainCity: action.mainCity,
              currentWeather: action.currentWeather,
              fiveDays: action.fiveDays,
              loading: false,
              error: null
            }
        case type.GET_CITY_FAILED:
            return {
              ...state,
              error: action.message,
              loading: false
            }
        default:
          return state;
    }
  }
