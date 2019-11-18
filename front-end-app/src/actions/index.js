import axios from "axios";
export const SIGNUP_START = "REGISTRATION_START";
export const SIGNUP_SUCCESS = "REGISTRATION_SUCCESS";
export const SIGNUP_FAIL = "REGISTRATION_FAIL";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const postRegistration = newUser => dispatch => {
  dispatch({ type: SIGNUP_START });
  axios
    .post("/api/auth/register", newUser)
    .then(res => dispatch({ type: SIGNUP_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: SIGNUP_FAIL, payload: err }));
};

export const userLogin = user => dispatch => {
  dispatch({ type: LOGIN_START });
  axios
    .post("/api/auth/login", user)
    .then(res => dispatch({ type: LOGIN_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: LOGIN_FAIL, payload: err }));
};
