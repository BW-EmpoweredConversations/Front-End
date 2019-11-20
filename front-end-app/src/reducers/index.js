import {
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from "../actions/index";

const initialState = {
  id: "",
  signup: { name: "" },
  login: { name: "" },
  isSigningUp: false,
  isLoggingIn: false,
  error: false,
  errorMsg: "",
  token: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_START:
      return {
        ...state,
        isSigningUp: true,
        error: false,
        errorMsg: ""
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        signup: {
          name: action.payload.name
        },
        isSigningUp: false,
        error: false,
        errorMsg: ""
      };

    case SIGNUP_FAIL:
      return {
        ...state,
        isSigningUp: false,
        error: true,
        errorMsg: action.payload
      };

    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true,
        error: false,
        errorMsg: ""
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          name: action.payload.user.name
        },
        isLoggingIn: false,
        error: false,
        errorMsg: ""
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggingIn: false,
        error: true,
        errorMsg: action.payload
      };
  }

  return state;
};
