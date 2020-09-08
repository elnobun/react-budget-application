import React, { useState } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";

const ExpenseForm = (props) => {
  // State
  const [description, setDescription] = useState(
    props.expense ? props.expense.description : ""
  );
  const [note, setNote] = useState(props.expense ? props.expense.note : "");
  const [amount, setAmount] = useState(
    props.expense ? props.expense.amount / 100 : ""
  );
  const [createdAt, setCreatedAt] = useState(
    props.expense ? moment(props.expense.createdAt) : moment()
  );
  const [calenderFocused, setCalenderFocused] = useState(false);
  const [error, setError] = useState("");

  // Functions
  const handleChangeDescription = (e) => {
    const description = e.target.value;
    setDescription(description);
  };

  const handleNoteChange = (e) => {
    const note = e.target.value;
    setNote(note);
  };

  const handleAmountChange = (e) => {
    const amount = e.target.value;
    !amount || amount.match(/^\d{1,}(\.\d{0,2})?$/) ? setAmount(amount) : null; // regex101.com
  };

  const handleDateChange = (date) => {
    date ? setCreatedAt(date) : null;
  };

  const handleFocusChange = ({ focused }) => {
    setCalenderFocused(focused);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) {
      setError("Please provide description and amount.");
    } else {
      setError("");
      props.onSubmit({
        description,
        note,
        amount: parseFloat(amount) * 100,
        createdAt: createdAt.valueOf(),
      });
    }
  };

  return (
    <div>
      {error && <p style={{ color: "indianRed" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={handleChangeDescription}
          autoFocus
        />
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={handleAmountChange}
        />
        <SingleDatePicker
          date={createdAt}
          onDateChange={handleDateChange}
          focused={calenderFocused}
          onFocusChange={handleFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          placeholder="Add a note for your expense (optional) "
          value={note}
          onChange={handleNoteChange}
        />
        <button>{props.expense ? "Edit Expense" : "Add Expense"}</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
