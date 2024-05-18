import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchAddMember, fetchEventById, fetchEvents } from "../../services/eventsAPI";

import { toast } from "react-toastify";

export const getEvents = createAsyncThunk(
  "events/all",
  async ({ page = 1, limit = 8 }, { rejectWithValue }) => {
    try {
      const { data } = await fetchEvents(page, limit);
      return data;
    } catch (error) {
      if (error) {
        toast.error(error.response.data.message);
        console.log(error);
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const getEventById = createAsyncThunk(
  "events/eventById",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await fetchEventById(id);
      return data;
    } catch (error) {
      if (error) {
        toast.error(error.response.data.message);
        console.log(error);
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAddMember = createAsyncThunk(
  "events/addMember",
  async ({ id, values }, { rejectWithValue }) => {
    console.log("id", id);
    console.log("values", values);
    try {
      const { data } = await fetchAddMember(id, values);
      return data;
    } catch (error) {
      if (error) {
        toast.error(error.response.data.message);
        console.log(error);
      }
      return rejectWithValue(error.response.data);
    }
  }
);
