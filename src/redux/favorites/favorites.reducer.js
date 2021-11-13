import * as type from "./favorites.types";

function removeItem(saved, selectedCity){
    
    const itemToRemove = saved.find(
    item => item.name === selectedCity);
    const newList = saved.filter((item) => item !== itemToRemove);
    return newList;
}

const initial_state = {
    saved: [{name: "Tel Aviv", key: 215854}]
};

export default function favoritesReducer(state = initial_state, action){
    switch(action.type){
        case type.ADD_TO_FAVORITES:
            return {
                ...state,
                saved: [...state.saved, action.payload]
            }
        case type.REMOVE_FROM_FAVORITES:
            return {
                ...state,
                saved: removeItem(state.saved, action.payload)
            }
        default: 
            return state;
    }
}