import React from "react";
import "./Modal.css";
import { FaArrowLeft } from "react-icons/fa";

function Modal({ country, onSaveClose }) {
  return (
    <div className="modal-container">
      <button
        onClick={() => {
          onSaveClose(false);
        }}
        className="modal-container__back-button"
      >
        <FaArrowLeft className="modal-container__back-icon" />
        <span className="modal-container__back">Back</span>
      </button>
      <div></div>
      <div className="modal-container__img-container">
        <img
          className="modal-container__img"
          src={country.flags.png}
          alt="flag"
        />
        <p>{country.name.common}</p>
      </div>
    </div>
  );
}

export default Modal;
