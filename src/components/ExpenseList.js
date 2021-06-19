import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ExpenseItem from "./ExpenseItem";

function ExpenseList() {
  // const expenses = [
  //   { id: 12, name: "shopping", cost: 40 },
  //   { id: 22, name: "holiday", cost: 400 },
  //   { id: 44, name: "car service", cost: 60 },
  //   { id: 88, name: "house remodeling", cost: 2300 },
  // ];

  const { expenses } = useContext(AppContext);

  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
  
  return (
    <ul className="list-group mt-3 mb-3">
      {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={capitalize(expense.name)} cost={expense.cost} />
      ))}
    </ul>
  );
}

export default ExpenseList;
