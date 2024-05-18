import { createSelector } from "@reduxjs/toolkit";
import { selectEventById } from "../events/eventsSelectors";

export const selectNameFilter = (state) => state.filter.fullName || "";
export const selectEmailFilter = (state) => state.filter.email || "";

export const getFilteredRegistrations = createSelector(
  [selectEventById, selectNameFilter, selectEmailFilter],
  (event, nameFilter, emailFilter) => {
    if (!event || !event.registrations) return [];

    const lowercasedNameFilter = nameFilter.toLowerCase();
    const lowercasedEmailFilter = emailFilter.toLowerCase();

    return event.registrations.filter(({ fullName, email }) => {
      const matchesName = fullName ? fullName.toLowerCase().includes(lowercasedNameFilter) : false;
      const matchesEmail = email ? email.toLowerCase().includes(lowercasedEmailFilter) : false;
      return matchesName && matchesEmail;
    });
  }
);
