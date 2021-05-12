import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//A slice for authorization

const initialState = {
  loading: false,
  hasError: false,
  authData: {},
};

const authLoginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    login: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.hasError = false;
      state.authData = payload;
      localStorage.setItem("userId", state.authData);
    },
    loginFailure: (state) => {
      state.loading = false;
      state.hasError = true;
    },
  },
});

//export the actions JIC
export const { login, loginSuccess, loginFailure } = authLoginSlice.actions;

//AuthLogin selector
export const authLoginSelector = (state) => state.loginData;

//reducers
export default authLoginSlice.reducer;

//Thunks

export function authLogin(formData) {
  //history is to redirect on login
  return async (dispatch) => {
    dispatch(login());

    try {
      const { data } = await axios.post(
        "http://localhost:3001/api/auth/login",
        formData
      );

      dispatch(loginSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(loginFailure(error));
    }
  };
}
