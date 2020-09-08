import React from "react";
import ExpenseForm from "../ExpenseForm";
import { useDispatch } from "react-redux";
import { addExpense } from "../../redux/actions/expenses";

const AddExpense = (props) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm
        onSubmit={(expense) => {
          dispatch(addExpense(expense));
          props.history.push("/");
        }}
      />
    </div>
  );
};

export default AddExpense;
