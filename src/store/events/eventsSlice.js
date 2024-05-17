import { createSlice } from "@reduxjs/toolkit";

import { getEvents } from "./eventsOperations";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getEvents.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getEvents.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.items = payload.events;
    });
    builder.addCase(getEvents.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const eventsReducer = eventsSlice.reducer;
