import { SET_USER, REMOVE_USER } from "./actions";

const initialState = {
  token: "",
  isLoggedIn: true,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USER:
      return {
        ...state,
        token: payload,
        isLoggedIn: true,
      };
    case REMOVE_USER:
      return {
        ...state,
        token: "",
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default reducer;
