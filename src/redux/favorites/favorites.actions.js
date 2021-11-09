import * as type from "./favorites.types";

export const addToFavorites = city => ({
    type: type.ADD_TO_FAVORITES,
    payload: city
  });

export const removeFromFavorites = cityName => ({
type: type.REMOVE_FROM_FAVORITES,
payload: cityName
});