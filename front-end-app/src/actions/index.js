import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";
export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const SEND_MESSAGE_START = "SEND_MESSAGE_START";
export const SEND_MESSAGE_SUCCESS = "SEND_MESSAGE_SUCCESS";
export const SEND_MESSAGE_FAIL = "SEND_MESSAGE_FAIL";

export const postRegistration = newUser => dispatch => {
  dispatch({ type: SIGNUP_START });
  axios
    .post(
      "https://empoweredconversations.herokuapp.com/api/auth/register",
      newUser
    )
    .then(res => dispatch({ type: SIGNUP_SUCCESS, payload: res.data }))
    .then(res => {
      localStorage.setItem("token", res.data.authorization);
    })
    .catch(err => dispatch({ type: SIGNUP_FAIL, payload: err }));
};

export const userLogin = user => dispatch => {
  dispatch({ type: LOGIN_START });
  axios
    .post("https://empoweredconversations.herokuapp.com/api/auth/login", user)
    .then(res => {
      // console.log(res);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      localStorage.setItem("token", res.data.authorization);
      localStorage.setItem("user", JSON.stringify(res.data.user));
    })
    .catch(err => dispatch({ type: LOGIN_FAIL, payload: err }));
};

export const messageSend = recipient => dispatch => {
  dispatch({ type: SEND_MESSAGE_START });
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(recipient);
  axiosWithAuth()
    .post(
      `https://empoweredconversations.herokuapp.com/api/users/${user.id}/conversations`,
      user
    )
    .then(res => {
      console.log(res);
      dispatch({ type: SEND_MESSAGE_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: SEND_MESSAGE_FAIL, payload: err }));
};
