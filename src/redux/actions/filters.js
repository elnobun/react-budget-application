// SET TEXT FILTER
export const setTextFilter = (payload = "") => ({
  type: "SET_TEXT_FILTER",
  text: payload,
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: "SORT_BY_DATE",
});

// SORT BY AMOUNT
export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
});

// SET START DATE
export const setStartDate = (payload) => ({
  type: "SET_START_DATE",
  startDate: payload,
});

// SET END DATE
export const setEndDate = (payload) => ({
  type: "SET_END_DATE",
  endDate: payload,
});
