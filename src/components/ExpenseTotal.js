import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function ExpenseTotal() {
  const { expenses } = useContext(AppContext);
  // Use the reduce function to get a total of all the costs and assign this to the variable
  const spent = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className="alert alert-primary">
      <span>Spent so far: ${spent}</span>
    </div>
  );
}
