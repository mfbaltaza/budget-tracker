import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from "./components/Budget"
import Remaining from "./components/Remaining"
import ExpenseTotal from "./components/ExpenseTotal"

// We are mainly using React over className

export default function App() {
  return (
    <div className="Container">
      <h1 className="mt-3">An Awesome Budget Planner</h1>
      {/* Below we add the main 3 elements in a row */}
      <div className="row mt-3">
        <div className="col-sm">
          <Budget />
        </div>
        <div className="col-sm">
          <Remaining />
        </div>
        <div className="col-sm">
          <ExpenseTotal />
        </div>
      </div>
    </div>
  )
}