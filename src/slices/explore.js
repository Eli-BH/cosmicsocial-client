//Slice for fetching the explore route
//this route gets all posts that exist
// this can be modified to add a protection

import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  hasError: false,
  exploreFeed: {},
};

const exploreSlice = createSlice({
  name: "explore",
  initialState,
  reducers: {
    explore: (state) => {
      state.loading = true;
    },
    exploreSuccess: (state, { payload }) => {
      state.loading = false;
      state.hasError = false;
      state.exploreFeed = payload;
    },
    exploreFailure: (state) => {
      state.loading = false;
      state.hasError = true;
    },
  },
});

//export the actions JIC
export const { explore, exploreFailure, exploreSuccess } = exploreSlice.actions;

//exploreFeed selector
export const exploreSelector = (state) => state.exploreData;

//reducer
export default exploreSlice.reducer;

//thunks
export function fetchExplore() {
  return async (dispatch) => {
    dispatch(explore());
    try {
      const { data } = await axios.get(
        "https://cosmicsocialserver.herokuapp.com/api/posts/explore"
      );
      dispatch(exploreSuccess(data));
    } catch (error) {
      dispatch(exploreFailure(error));
    }
  };
}
