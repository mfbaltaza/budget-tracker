import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Remaining() {
  const { expenses, budget } = useContext(AppContext);
  // With reduce we bring all the cost and sum them to total.
  const totalSpent = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  // We calculate based on overspending the color of the class
  const alertType = totalSpent > budget ? "alert-danger" : "alert-success";

  return (
    <div>
      <div className={`alert ${alertType}`}>
      {/* Here we do the math subtracting the total that has been spent to the budget amount */}
        <span>Remaining: ${budget - totalSpent}</span>
      </div>
    </div>
  );
}
