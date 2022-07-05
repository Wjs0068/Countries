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
      </div>
      <div className="modal-container__right-side-container">
        <h3 className="modal-container__header-three">{country.name.common}</h3>
        <div className="modal-container__grid-for-elements">
          <div className="modal-container__category">
            <span className="modal-container__description">Native Name:</span>
            <p className="modal-container__paragraph"></p>
          </div>
          <div className="modal-container__category">
            <span className="modal-container__description">Population:</span>
            <p className="modal-container__paragraph">{country.population}</p>
          </div>
          <div className="modal-container__category">
            <span className="modal-container__description">Region:</span>
            <p className="modal-container__paragraph">{country.region}</p>
          </div>
          <div className="modal-container__category">
            <span className="modal-container__description">Sub Region:</span>
            <p className="modal-container__paragraph">{country.subregion}</p>
          </div>
          <div className="modal-container__category">
            <span className="modal-container__description">Capital:</span>
            <p className="modal-container__paragraph">{country.capital[0]}</p>
          </div>
          <div className="modal-container__category">
            <span className="modal-container__description">
              Top Level Domain:
            </span>
            <p className="modal-container__paragraph">{country.tld[0]}</p>
          </div>
          <div className="modal-container__category">
            <span className="modal-container__description">Currencies:</span>
            <p className="modal-container__paragraph"></p>
          </div>
          <div className="modal-container__category">
            <span className="modal-container__description">Languages:</span>
            <p className="modal-container__paragraph">{}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
