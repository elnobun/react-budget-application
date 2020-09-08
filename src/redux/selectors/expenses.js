// Get the visible expense
import moment from "moment";

const selectExpenses = (expenses, filters) => {
  // filter the expense array
  return expenses
    .filter((expense) => {
      const createdAtMoment = moment(expense.createdAt);
      // Match start & end date
      const startDateMatch = filters.startDate
        ? filters.startDate.isSameOrBefore(createdAtMoment, "day")
        : true;
      const endDateMatch = filters.endDate
        ? filters.endDate.isSameOrAfter(createdAtMoment, "day")
        : true;

      // Match expenses description and filters text input
      const textMatch = expense.description
        .toLowerCase()
        .includes(filters.text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (filters.sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1; // descending order - lower 1st
      } else if (filters.sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1; //descending order
      }
    });
};

export default selectExpenses;
