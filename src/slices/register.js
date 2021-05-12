import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Slice for registration
const initialState = {
  loading: false,
  hasError: false,
  authData: {},
};

const authRegisterSlice = createSlice({
  name: "registerSlice",
  initialState,
  reducers: {
    register: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.hasError = false;
      state.authData = payload;
      localStorage.setItem("userId", JSON.stringify(payload));
    },
    registerFailure: (state) => {
      state.loading = false;
      state.hasError = true;
    },
  },
});

//export actions JIC
export const { register, registerSuccess, registerFailure } =
  authRegisterSlice.actions;

//AuthRegister Selector
export const authRegisterSelector = (state) => state.registerData;

//reducers
export default authRegisterSlice.reducer;

//thunks
export function authRegister(formData) {
  return async (dispatch) => {
    dispatch(register());
    try {
      const { data } = await axios.post(
        "http://localhost:3001/api/auth/register",
        formData
      );

      dispatch(registerSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(register());
    }
  };
}
