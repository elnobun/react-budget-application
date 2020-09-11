import selectExpenseTotal from "../../redux/selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("should return 0 if no expenses", () => {
  const result = selectExpenseTotal([]);
  expect(result).toBe(0);
});

test("should correctly add up a single expense", () => {
  const result = selectExpenseTotal([expenses[0]]);
  expect(result).toBe(195);
});

test("correctly add up multiple expenses", () => {
  const result = selectExpenseTotal([expenses[0], expenses[1], expenses[2]]);
  expect(result).toBe(114195);
});
