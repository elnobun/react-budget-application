import { createStore, combineReducers } from "redux";
import { v4 as uuid } from "uuid";

const initialExpenseState = [];
const initialFilterState = {
  text: "",
};

// ACTIONS
const actions = {
  addExpense: (payload) => {
    store.dispatch({
      type: "ADD_EXPENSE",
      expense: {
        id: uuid(),
        note: payload.note || 0,
        description: payload.description || "",
        createdAt: payload.createdAt || 0,
      },
    });
  },
  setTextFilter: (payload = "") => {
    store.dispatch({
      type: "SET_TEXT_FILTER",
      text: payload,
    });
  },
};

// REDUCERS
const expenseReducer = (state = initialExpenseState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    default:
      return state;
  }
};
const filterReducer = (state = initialFilterState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };
    default:
      return state;
  }
};

// SELECTORS
const visibleExpenses = (expenses, filters) => {
  return expenses.map((expense) => {
    const textMatch = expense.description
      .toLowerCase()
      .includes(filters.text.toLowerCase());
  });
};

// STORE
// const store = combineReducers({
//   expenses: expenseReducer,
//   filters: filterReducer,
// });

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filterReducer,
  })
);
actions.addExpense({ description: "Gas bill" });
actions.setTextFilter({ text: "text" });
console.log(store.getState());
