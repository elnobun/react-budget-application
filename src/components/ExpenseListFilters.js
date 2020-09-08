import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setEndDate,
  setStartDate,
  setTextFilter,
  sortByAmount,
  sortByDate,
} from "../redux/actions/filters";
import { DateRangePicker, SingleDatePicker } from "react-dates";
import "react-dates/initialize";

const ExpenseListFilters = () => {
  // State
  const [calenderFocused, setCalenderFocus] = useState(null);

  // Redux Store
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  // Functions
  const handleInputChange = (e) => {
    const userInput = e.target.value;
    dispatch(setTextFilter(userInput));
  };

  const handleSelectChange = (e) => {
    const userSelect = e.target.value;
    userSelect === "date"
      ? dispatch(sortByDate())
      : userSelect === "amount"
      ? dispatch(sortByAmount())
      : null;
  };

  const handleDateChange = ({ startDate, endDate }) => {
    dispatch(setStartDate(startDate));
    dispatch(setEndDate(endDate));
  };

  const handleFocusChange = (calenderFocused) => {
    setCalenderFocus(calenderFocused);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter Expenses"
        value={filters.text}
        onChange={handleInputChange}
      />

      <select value={filters.sortBy} onChange={handleSelectChange}>
        <option value="" hidden>
          Sort Expenses
        </option>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>

      <DateRangePicker
        startDate={filters.startDate}
        startDateId="start"
        endDate={filters.endDate}
        endDateId="end"
        onDatesChange={handleDateChange}
        focusedInput={calenderFocused}
        onFocusChange={handleFocusChange}
        showClearDates={true}
        numberOfMonths={1}
        isOutsideRange={() => false}
      />
    </div>
  );
};

export default ExpenseListFilters;
