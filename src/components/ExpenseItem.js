import React from "react";
import { TiDelete } from "react-icons/ti";

export default function ExpenseItem(props) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className="badge badge-primary badge-pill mr-3">
          ${props.cost}
        </span>
        {/* This is a delete icon we bring */}
        <TiDelete size="1.5em"></TiDelete>
      </div>
    </li>
  );
}
