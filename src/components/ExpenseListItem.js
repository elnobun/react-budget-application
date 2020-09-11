import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";
import "numeral/locales/en-gb";

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  numeral.locale("en-gb");
  return (
    <div>
      <Link to={`edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <div>
        <p>Amount: {numeral(amount / 100).format("$0,0.00")}</p>
        <p>Created: {moment(createdAt).format("MMMM Do, YYYY")}</p>
      </div>
    </div>
  );
};

export default ExpenseListItem;
