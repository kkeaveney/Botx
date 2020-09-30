import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { get } from "lodash";

export const apiSlice = createSlice({
  name: "api",
  initialState: {
    loading: false,
    data: [],
    lastFetch: null,
  },
  reducers: {
    apiReceived: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { apiReceived } = apiSlice.actions;
export default apiSlice.reducer;

// Selectors

const api = (state) => get(state, "api.data");
export const apiSelector = createSelector(api, (a) => a.records);
