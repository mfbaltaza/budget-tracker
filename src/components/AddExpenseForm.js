import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

export default function AddExpenseForm() {
  // We bring dispatch from our global state (Context API)
  // https://reactjs.org/docs/hooks-faq.html#how-to-avoid-passing-callbacks-down
  const { dispatch } = useContext(AppContext);

  // We initialize state for name and cost
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Creates an expense object
    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    // We are dispatching an action
    dispatch({
      // The type tells the AppReducer how to update the state
      type: "ADD_EXPENSE",
      payload: expense,
    });

    console.log("Working");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Section for the Add Expenses Area */}
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input
            required="required"
            type="number"
            className="form-control"
            id="name"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          ></input>
        </div>
      </div>

      <div className="row">
        <div className="col-sm mt-5 mb-5">
          <div class="d-grid gap-2 col-6 mx-auto">
            <button type="submit" class="btn btn-outline-danger btn-lg mb-5">
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
