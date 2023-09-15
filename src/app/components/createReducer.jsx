import { createSlice } from "@reduxjs/toolkit";
import { getCountries } from "./action";

const initialState = {
  status: "idle",
  data: [],
  error: null,
};

const createReducer = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(getCountries.rejected, (state) => {
        state.status = "error";
        state.error = "error";
      });
  },
});

export default createReducer;
