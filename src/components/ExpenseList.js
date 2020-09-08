import React from "react";
import { useSelector } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../redux/selectors/expenses";

export const ExpenseList = () => {
  const expenses = useSelector((state) =>
    selectExpenses(state.expenses, state.filters)
  );
  return (
    <div>
      <h1>Expense List</h1>
      {expenses.length === 0 ? (
        <p>No Expenses</p>
      ) : (
        expenses.map((expense) => (
          <ExpenseListItem key={expense.id} {...expense} />
        ))
      )}
    </div>
  );
};

export default ExpenseList;
