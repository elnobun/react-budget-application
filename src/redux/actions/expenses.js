import { v4 as uuid } from "uuid";

// ADD EXPENSE
export const addExpense = (payload) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description: payload.description || "",
    note: payload.note || "",
    amount: payload.amount || 0,
    createdAt: payload.createdAt || 0,
  },
});

// REMOVE EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

// EDIT EXPENSE
export const editExpense = (id, update) => ({
  type: "EDIT_EXPENSE",
  id,
  update,
});
