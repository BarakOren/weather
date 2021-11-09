import * as type from "./mainCity.types";

export const setMainCity = () => ({
    type: type.GET_CITY_REQUESTED,
  });

export const SearchFor = city => ({
  type: type.SET_SEARCH,
  payload: city
});