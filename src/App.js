import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import { AppProvider } from "./context/AppContext";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";

// We are mainly using React over className

export default function App() {
  return (
    <AppProvider>
      <NavBar />
      <div className="container mt-5 p-2">
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
          <h3 className="mt-3">Expenses</h3>
          <div className="row">
            <div className="col-sm">
              <ExpenseList />
            </div>
          </div>
          <h3 className="mt-3">Add Expense</h3>
          <div className="row mt-3">
            <div className="col-sm">
              <AddExpenseForm />
            </div>
          </div>
        </div>
      </div>
     <Footer />
    </AppProvider>
  );
}
