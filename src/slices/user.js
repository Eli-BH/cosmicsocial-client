//slice to get userdata
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  hasError: false,
  userData: {},
};

const userDataSlice = createSlice({
  name: "UserData",
  initialState,
  reducers: {
    getUserData: (state) => {
      state.loading = true;
    },
    getUserDataSuccess: (state, { payload }) => {
      state.loading = false;
      state.hasError = false;
      state.userData = payload;
    },
    getUserDataFailure: (state) => {
      state.hasError = true;
      state.loading = false;
    },
  },
});

// export the actions if needed
export const { getUserData, getUserDataFailure, getUserDataSuccess } =
  userDataSlice.actions;

//getUser Selector
export const getUserDataSelector = (state) => state.userData;

//reducers
export default userDataSlice.reducer;

//thunks
export function fetchUserData(userId) {
  return async (dispatch) => {
    dispatch(getUserData());

    try {
      const { data } = await axios.get(
        "https://cosmicsocialserver.herokuapp.com/api/users?userId=" + userId
      );
      dispatch(getUserDataSuccess(data));
    } catch (error) {
      dispatch(getUserDataFailure());
    }
  };
}
