// We import the useContext Hook in order to use it, very important.
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  // Here we bring the global state that is over the App Context
  // and we destructure it into a const called budget
  const { budget } = useContext(AppContext)

  return (
    <div className="alert alert-secondary">
      <span>Budget: ${budget}</span>
    </div>
  )
}

export default Budget