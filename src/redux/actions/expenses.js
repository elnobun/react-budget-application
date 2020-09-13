import { database } from "../../firebase/firebase";

// ADD EXPENSE
export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense,
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const expense = {
      uid: uid,
      description: expenseData.description || "",
      note: expenseData.note || "",
      amount: expenseData.amount || 0,
      createdAt: expenseData.createdAt || 0,
    };
    return database.add(expense).then((ref) => {
      dispatch(
        addExpense({
          id: ref.id,
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

export const startRemoveExpense = (id) => {
  return (dispatch) => {
    return database
      .doc(id)
      .delete()
      .then(() => {
        dispatch(removeExpense(id));
      });
  };
};

// EDIT EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

export const startEditExpense = (id, updates) => {
  return (dispatch) => {
    return database
      .doc(id)
      .update(updates)
      .then(() => {
        dispatch(editExpense(id, updates));
      });
  };
};

// SET EXPENSES
export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses,
});

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .where("user_id", "==", uid)
      .get()
      .then((querySnapshot) => {
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
