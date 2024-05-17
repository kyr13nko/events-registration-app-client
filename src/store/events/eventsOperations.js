import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchEvents } from "../../services/eventsAPI";

export const getEvents = createAsyncThunk("events", async (_, { rejectWithValue }) => {
  try {
    const { data } = await fetchEvents();
    return data;
  } catch (error) {
    if (error) {
      // toast.error(error.response.data.message);
      console.log(error);
    }
    return rejectWithValue(error.response.data);
  }
});
