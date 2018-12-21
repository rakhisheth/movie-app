import * as actionTypes from "../STORE/ACTIONS/actions";

const initialState = {
  name: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CURRENT:
      return state;
    case actionTypes.TOP_RATED:
      return state;
    case actionTypes.UPCOMING:
      return state;
    default:
      return state;
  }
};

export default reducer;

//// DISPATCH
