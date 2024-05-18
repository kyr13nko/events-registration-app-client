import { createSlice } from "@reduxjs/toolkit";

import { getEventById, getEvents } from "./eventsOperations";

const initialState = {
  allEvents: [],
  eventById: {},
  loading: false,
  error: null,
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getEvents.pending, (state) => {
        state.loading = true;
        state.eventById = {};
        state.error = null;
      })
      .addCase(getEvents.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.allEvents = payload.events;
      })
      .addCase(getEvents.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });

    builder
      .addCase(getEventById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getEventById.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.eventById = payload;
      })
      .addCase(getEventById.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const eventsReducer = eventsSlice.reducer;
