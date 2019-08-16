import { GET_DATA_START, GET_DATA_SUCCESS, GET_DATA_FAIL } from "./actions";

const initialState = {
  error: "",
  isGetting: false,
  data: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA_START:
      return {
        ...state,
        error: "",
        isGetting: true,
        data: []
      };
    case GET_DATA_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        error: "",
        isGetting: false,
        data: action.payload
      };
    case GET_DATA_FAIL:
      return {
        ...state,
        error: action.error,
        isGetting: false,
        data: ""
      };
    default:
      return state;
  }
}

export default reducer;