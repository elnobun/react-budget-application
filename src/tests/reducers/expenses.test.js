import expensesReducer from "../../redux/reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should add expenses", () => {
  const action = {
    type: "ADD_EXPENSE",
    expense: {
      id: "1",
      description: "Laptop",
      note: "",
      amount: 1095,
      createdAt: 20000,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "1",
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should edit expense by id", () => {
  const amount = 120000;
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    update: {
      amount,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

test("should not edit expense if not found", () => {
  const amount = 120000;
  const action = {
    type: "EDIT_EXPENSE",
    id: "1",
    update: {
      amount,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
