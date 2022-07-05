import React from "react";
import "./Modal.css";

function Modal({ country }) {
  return <div className="modal-container">{country.name}</div>;
}

export default Modal;
