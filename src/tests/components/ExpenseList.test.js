import React from "react";
import { ExpenseList } from "../../components/ExpenseList";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";
import { ReduxProvider } from "../setupProvider";

// jest.mock("react-redux", () => ({
//   useSelector: jest.fn((fn) => fn()),
// }));
//
// jest.mock("../../components/ExpenseList");

test("should render ExpenseList with expenses", () => {
  const wrapper = shallow(
    <ReduxProvider>
      <ExpenseList expenses={expenses} />
    </ReduxProvider>
  );
  expect(wrapper).toMatchSnapshot();
});
