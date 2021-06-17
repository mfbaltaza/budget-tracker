import React from "react";

export default function AddExpenseForm() {
  return (
    <form>
      {/* Section for the Add Expenses Area */}
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="name"
          ></input>
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="name"
          ></input>
        </div>
      </div>
      <h3>Add Expense</h3>
      <div className="row">
        <div className="col-sm">
          <button type="submit" className="btn btn-primary mt3">
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
