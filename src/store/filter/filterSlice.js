import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  email: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setNameFilter: (state, { payload }) => {
      state.fullName = payload;
    },
    setEmailFilter: (state, { payload }) => {
      state.email = payload;
    },
    clearFilters: (state, { payload }) => {
      state.email = "";
      state.fullName = "";
    },
  },
});

export const { setNameFilter, setEmailFilter, clearFilters } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
