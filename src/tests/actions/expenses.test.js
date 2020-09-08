import {
  addExpense,
  editExpense,
  removeExpense,
} from "../../redux/actions/expenses";

// Test removeExpense action
test("should remove expense object", () => {
  const action = removeExpense({ id: "123" });
  expect(action).toEqual({ type: "REMOVE_EXPENSE", id: "123" });
});

// Test EditExpense action
test("should edit expense object", () => {
  const action = editExpense("123", { note: "some notes" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123",
    update: { note: "some notes" },
  });
});

// Test add Expense action
test("should add expense object with values", () => {
  const expenseData = {
    description: "Rent",
    amount: 109500,
    createdAt: 1000,
    note: "This was last month rent",
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test("should add default expense values", () => {
  const action = addExpense({});
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
    },
  });
});
