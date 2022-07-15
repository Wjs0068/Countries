import React from "react";
import "./Nav.css";

export const reload = {
  reload() {
    window.location.reload();
    return true;
  },
};
function Nav() {
  return (
    <nav className="nav">
      <button
        onClick={() => {
          reload.reload();
        }}
        className="nav__header"
      >
        All Around the World
      </button>
    </nav>
  );
}

export default Nav;
