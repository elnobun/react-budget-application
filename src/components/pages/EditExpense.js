import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ExpenseForm from "../ExpenseForm";
import {
  startEditExpense,
  startRemoveExpense,
} from "../../redux/actions/expenses";

const EditExpense = (props) => {
  const editedExpense = useSelector((state) =>
    state.expenses.find((expense) => expense.id === props.match.params.id)
  );

  const dispatch = useDispatch();

  const submitExpense = (expense) => {
    dispatch(startEditExpense(editedExpense.id, expense));
    props.history.push("/dashboard");
  };

  const deleteExpense = (id) => {
    dispatch(startRemoveExpense(id));
    props.history.push("/dashboard");
  };

  return (
    <section>
      <div className="section-header">
        <div className="container">
          <h1 className="section-header__title">Edit Expense</h1>
        </div>
      </div>
      <div className="container">
        <ExpenseForm expense={editedExpense} onSubmit={submitExpense} />
        <button
          className="button button--secondary"
          onClick={() => deleteExpense(editedExpense.id)}
        >
          Remove Expense
        </button>
      </div>
    </section>
  );
};

export default EditExpense;
