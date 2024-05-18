import { createSlice } from "@reduxjs/toolkit";

import { getAddMember, getEventById, getEvents } from "./eventsOperations";

const initialState = {
  allEvents: [],
  totalPages: 1,
  currentPage: 1,
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
        state.error = null;
      })
      .addCase(getEvents.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.totalPages = payload.totalPages;
        state.currentPage = payload.currentPage;

        const newEvents = payload.events.filter(
          (event) => !state.allEvents.some((existingEvent) => existingEvent._id === event._id)
        );
        state.allEvents = [...state.allEvents, ...newEvents];
      })
      .addCase(getEvents.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });

    builder
      .addCase(getEventById.pending, (state) => {
        state.loading = true;
        state.eventById = {};
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

    builder
      .addCase(getAddMember.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAddMember.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(getAddMember.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const eventsReducer = eventsSlice.reducer;
