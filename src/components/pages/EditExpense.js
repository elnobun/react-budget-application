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
    props.history.push("/");
  };

  const deleteExpense = (id) => {
    dispatch(startRemoveExpense(id));
    props.history.push("/");
  };

  return (
    <div>
      <ExpenseForm expense={editedExpense} onSubmit={submitExpense} />
      <button onClick={() => deleteExpense(editedExpense.id)}>Remove</button>
    </div>
  );
};

export default EditExpense;
