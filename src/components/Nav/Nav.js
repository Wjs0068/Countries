import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <button
        onClick={() => {
          window.location.reload();
        }}
        className="nav__header"
      >
        All Around the World
      </button>
    </nav>
  );
}

export default Nav;
