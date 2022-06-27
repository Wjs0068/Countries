import React from "react";
import ModeButton from "./ModeButton.js";
import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <h1 className="nav__header">All Around the World</h1>
      <ModeButton />
    </nav>
  );
}

export default Nav;
