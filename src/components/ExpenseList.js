import React from "react";
import { useSelector } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../redux/selectors/expenses";

export const ExpenseList = () => {
  const expenses = useSelector((state) =>
    selectExpenses(state.expenses, state.filters)
  );
  return (
    <section className="container">
      <div className="list-header">
        <div className="show-for-mobile">Expenses</div>
        <div className="show-for-desktop">Expense</div>
        <div className="show-for-desktop">Amount</div>
      </div>
      <div className="list-body">
        {expenses.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No Expenses</span>
          </div>
        ) : (
          expenses.map((expense) => (
            <ExpenseListItem key={expense.id} {...expense} />
          ))
        )}
      </div>
    </section>
  );
};

export default ExpenseList;
