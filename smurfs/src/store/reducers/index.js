// Import action types
import { IS_LOADING, DATA_LOAD_SUCCESS, DATA_LOAD_ERROR } from "../actions";

// Declare initial state
const initialState = {
  smurfs: [],
  isLoading: false,
  errors: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
        smurfs: [],
      };

    case DATA_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: payload,
      };

    case DATA_LOAD_ERROR:
      return {
        ...state,
        isLoading: false,
        errors: payload,
      };
    default:
      return state;
  }
};
