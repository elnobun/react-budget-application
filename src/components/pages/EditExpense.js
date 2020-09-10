import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ExpenseForm from "../ExpenseForm";
import { editExpense, removeExpense } from "../../redux/actions/expenses";

const EditExpense = (props) => {
  const editedExpense = useSelector((state) =>
    state.expenses.find((expense) => expense.id === props.match.params.id)
  );

  const dispatch = useDispatch();

  const deleteExpense = (id) => {
    dispatch(removeExpense(id));
    props.history.push("/");
  };
  return (
    <div>
      <ExpenseForm
        expense={editedExpense}
        onSubmit={(expense) => {
          dispatch(editExpense(editedExpense.id, expense));
          props.history.push("/");
        }}
      />
      <button onClick={() => deleteExpense(editedExpense.id)}>Remove</button>
    </div>
  );
};

export default EditExpense;
