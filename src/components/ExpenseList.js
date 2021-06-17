import React from "react";
import ExpenseItem from './ExpenseItem'

function ExpenseList() {
  const expenses = [
    { id: 12, name: "shopping", cost: 40 },
    { id: 22, name: "holiday", cost: 400 },
    { id: 44, name: "car service", cost: 60 },
    { id: 88, name: "house remodeling", cost: 2300 },
  ];

  return (
    <ul>
      {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
}

export default ExpenseList;
