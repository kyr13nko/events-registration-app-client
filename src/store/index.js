import { configureStore } from "@reduxjs/toolkit";

import { eventsReducer } from "./events/eventsSlice";
import { filterReducer } from "./filter/filterSlice";

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    filter: filterReducer,
  },
});
