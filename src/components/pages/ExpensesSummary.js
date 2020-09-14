import React from "react";
import { useSelector } from "react-redux";
import selectExpenseTotal from "../../redux/selectors/expenses-total";
import selectExpenses from "../../redux/selectors/expenses";
import numeral from "numeral";
import "numeral/locales/en-gb";
import { Link } from "react-router-dom";

const ExpensesSummary = () => {
  // change locale currency
  numeral.locale("en-gb");

  // Connect component to store to get expenses and filters
  const visibleExpenses = useSelector((state) =>
    selectExpenses(state.expenses, state.filters)
  );

  // Get expenses length and the total expense amount
  const expenseCount = visibleExpenses.length;
  const expensesTotal = selectExpenseTotal(visibleExpenses);

  // Get expense word
  const expenseWord = expenseCount === 1 ? "expense" : "expenses";

  // Get expenseTotal and numeral value
  const total = numeral(expensesTotal / 100).format("$0,0.00");

  return (
    <section className="section-header">
      <div className="container">
        <h2 className="section-header__title">
          Viewing <span>{expenseCount}</span> {expenseWord} totalling{" "}
          <span>{total}</span>
        </h2>
        <div className="section-header__actions">
          <Link className="button" to="/create">
            Add Expense
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExpensesSummary;
