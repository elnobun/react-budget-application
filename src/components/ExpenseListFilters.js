import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setEndDate,
  setStartDate,
  setTextFilter,
  sortByAmount,
  sortByDate,
} from "../redux/actions/filters";
import { DateRangePicker } from "react-dates";
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
    <section className="section-filters container">
      <div className="section-filters__group">
        <div className="section-filters__group--item">
          <input
            type="text"
            className="text-input"
            placeholder="Search Expenses"
            value={filters.text}
            onChange={handleInputChange}
          />
        </div>

        <div className="section-filters__group--item">
          <select
            className="select"
            value={filters.sortBy}
            onChange={handleSelectChange}
          >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
        </div>

        <div className="section-filters__group--item">
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
      </div>
    </section>
  );
};

export default ExpenseListFilters;
