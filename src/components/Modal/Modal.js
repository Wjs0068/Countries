import React from "react";
import "./Modal.css";
import { FaArrowLeft } from "react-icons/fa";

function Modal({ country, onSaveClose }) {
  var currencyName = [];
  var languages = [];
  var nativeName;

  if (country.currencies) {
    for (const [value] of Object.entries(country.currencies)) {
      console.log(`${value.name}`);
      currencyName.push(value.name);
    }
  }

  if (country.languages) {
    for (const [value] of Object.entries(country.languages)) {
      console.log(`${value}`);
      languages.push(value);
    }
  }

  if (country.name.nativeName) {
    for (const [value] of Object.entries(country.name.nativeName)) {
      console.log(`${value.official}`);
      nativeName = value.official;
    }
  }

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

      <img
        className="modal-container__img"
        src={country.flags.png}
        alt="flag"
      />

      <div className="modal-container__right-side-container">
        <h3 className="modal-container__header-three">{country.name.common}</h3>
        <div className="modal-container__grid-for-elements">
          <div className="modal-container__category">
            <span className="modal-container__description">Native Name:</span>
            {nativeName ? (
              <p className="modal-container__paragraph">{nativeName}</p>
            ) : (
              <p className="modal-container__paragraph">N/A</p>
            )}
          </div>
          <div className="modal-container__category">
            <span className="modal-container__description">Population:</span>
            {country.population ? (
              <p className="modal-container__paragraph">{country.population}</p>
            ) : (
              <p className="modal-container__paragraph">N/A</p>
            )}
          </div>
          <div className="modal-container__category">
            <span className="modal-container__description">Region:</span>
            {country.region ? (
              <p className="modal-container__paragraph">{country.region}</p>
            ) : (
              <p className="modal-container__paragraph">N/A</p>
            )}
          </div>
          <div className="modal-container__category">
            <span className="modal-container__description">Sub Region:</span>
            {country.subregion ? (
              <p className="modal-container__paragraph">{country.subregion}</p>
            ) : (
              <p className="modal-container__paragraph">N/A</p>
            )}
          </div>
          <div className="modal-container__category">
            <span className="modal-container__description">Capital:</span>
            {country.capital ? (
              <p className="modal-container__paragraph">{country.capital[0]}</p>
            ) : (
              <p className="modal-container__paragraph">N/A</p>
            )}
          </div>
          <div className="modal-container__category">
            <span className="modal-container__description">
              Top Level Domain:
            </span>
            {country.tld[0] ? (
              <p className="modal-container__paragraph">{country.tld[0]}</p>
            ) : (
              <p className="modal-container__paragraph">N/A</p>
            )}
          </div>
          <div className="modal-container__category">
            <span className="modal-container__description">Currencies:</span>
            <div>
              {currencyName ? (
                currencyName.map((currency) => {
                  return (
                    <p className="modal-container__language">{currency}</p>
                  );
                })
              ) : (
                <p className="modal-container__language">N/A</p>
              )}
            </div>
          </div>
          <div className="modal-container__category">
            <span className="modal-container__description">Languages:</span>
            <div>
              {languages ? (
                languages.map((language) => {
                  return (
                    <p className="modal-container__language">{language}</p>
                  );
                })
              ) : (
                <p className="modal-container__language">N/A</p>
              )}
            </div>
          </div>
        </div>
        <div className="modal-container__border-container">
          <p className="modal-container__name-description">Border Nations:</p>
          <div className="modal-container__border-nations">
            {country.borders ? (
              country.borders.map((border) => {
                return <p className="modal-container__border-name">{border}</p>;
              })
            ) : (
              <p className="modal-container__border-name">N/A</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
