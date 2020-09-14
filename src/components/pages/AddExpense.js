import React from "react";
import ExpenseForm from "../ExpenseForm";
import { useDispatch } from "react-redux";
import { startAddExpense } from "../../redux/actions/expenses";

const AddExpense = (props) => {
  const dispatch = useDispatch();
  return (
    <section>
      <div className="section-header">
        <div className="container">
          <h1 className="section-header__title">Add Expense</h1>
        </div>
      </div>
      <div className="container">
        <ExpenseForm
          onSubmit={(expense) => {
            dispatch(startAddExpense(expense));
            props.history.push("/dashboard");
          }}
        />
      </div>
    </section>
  );
};

export default AddExpense;
