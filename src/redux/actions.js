export const SET_USER = "SET_USER";
export const REMOVE_USER = "REMOVE_USER";

export const login = (payload) => ({
  type: SET_USER,
  payload,
});

export const logout = (payload) => ({
  type: REMOVE_USER,
  payload,
});
