import React from "react";
import ExpensesSummary from "../../components/pages/ExpensesSummary";
import { shallow } from "enzyme";
import { ReduxProvider } from "../setupProvider";
import expenses from "../fixtures/expenses";

test("should render ExpenseSummary with 1 expense", () => {
  const wrapper = shallow(
    <ReduxProvider>
      <ExpensesSummary expenseCount={1} expensesTotal={200} />
    </ReduxProvider>
  );
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseSummary with multiple expense", () => {
  const wrapper = shallow(
    <ReduxProvider>
      <ExpensesSummary expenseCount={25} expensesTotal={25354678} />
    </ReduxProvider>
  );
  expect(wrapper).toMatchSnapshot();
});
