import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import mainCityReducer from "./mainCity/mainCityReducer";
import favoritesReducer from "./favorites/favorites.reducer";
import degreesReducer from "./degrees/degreesReducer";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["mainCity", "favorites"]
}
const rootReducer = combineReducers({
        degrees: degreesReducer,
        mainCity: mainCityReducer, 
        favorites: favoritesReducer
    })

export default persistReducer(persistConfig, rootReducer);