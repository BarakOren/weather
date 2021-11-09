import degreeTypes from "./degreeTypes";

const initial_state = {
    degreeType: true
};

export default function degreesReducer(state = initial_state, action){
    switch(action.type){
      case degreeTypes.SWITCH_DEGREE_TYPE:
        return {
          ...state,
          degreeType: !state.degreeType
        }
        default:
          return state;
    }
  }


