import React from "react";
import ExpenseList from "../ExpenseList";
import ExpenseListFilters from "../ExpenseListFilters";

const ExpenseDashboard = () => {
  return (
    <div>
      <ExpenseListFilters />
      <ExpenseList />
    </div>
  );
};

export default ExpenseDashboard;
