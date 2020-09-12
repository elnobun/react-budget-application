import { v4 as uuid } from "uuid";
import database from "../../firebase/firebase";

// ADD EXPENSE
export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense,
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const expense = {
      description: expenseData.description || "",
      note: expenseData.note || "",
      amount: expenseData.amount || 0,
      createdAt: expenseData.createdAt || 0,
    };
    return database.add(expense).then((doc) => {
      dispatch(
        addExpense({
          id: doc.id,
          ...expense,
        })
      );
    });
  };
};

// REMOVE EXPENSE
export const removeExpense = (id = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

// EDIT EXPENSE
export const editExpense = (id, update) => ({
  type: "EDIT_EXPENSE",
  id,
  update,
});

// SET EXPENSES
export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses,
});

export const startSetExpenses = () => {
  return (dispatch) => {
    return database.get().then((querySnapshot) => {
      const expenses = [];

      querySnapshot.forEach((doc) => {
        expenses.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      dispatch(setExpenses(expenses));
    });
  };
};
