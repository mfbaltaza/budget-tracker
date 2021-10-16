import React from "react";

export default function App() {
  return (
    <nav
      class="navbar sticky-top navbar-expand-lg"
      style={{ backgroundColor: "#090637"}}
    >
      <div class="container">
        <a class="navbar-brand " href="#" style={{  color:"#cbc8f9" }}>
          Awesome Budget Planner
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </nav>
  );
}
