import React from "react";
import { FaMoon } from "react-icons/fa";
import "./Mode.css";

function ModeButton() {
  return (
    <button className="nav__button">
      <div className="nav__button__container">
        <FaMoon className="nav__button__container--icon" />
        <p className="nav__button__container--para">Mode</p>
      </div>
    </button>
  );
}

export default ModeButton;
