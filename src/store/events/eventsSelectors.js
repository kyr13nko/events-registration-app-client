export const selectEvents = (state) => state.events.allEvents;

export const selectTotalPages = (state) => state.events.totalPages;

export const selectCurrentPage = (state) => state.events.currentPage;

export const selectEventById = (state) => state.events.eventById;

export const selectIsLoading = (state) => state.events.loading;

export const selectError = (state) => state.events.error;
