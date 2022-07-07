import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Countries.css";

function Countries({ region, search, onSaveCountry, onSaveOpen }) {
  const [countries, setCountries] = useState([]);
  // const [open, setOpen] = useState(false);
  var chosenCountry;

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((countries) => {
      setCountries(countries.data);
    });
  }, [region]);

  return (
    <>
      <div className="list-container">
        {countries
          .sort(function (a, b) {
            const nameA = a.name.common;
            const nameB = b.name.common;
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }

            // names must be equal
            return 0;
          })
          .filter((countries) => {
            const lowerCase = search.toLowerCase();
            if (region === "All") {
              return countries.name.common.toLowerCase().includes(lowerCase);
            } else {
              return (
                countries.region.includes(region) &&
                countries.name.common.toLowerCase().includes(lowerCase)
              );
            }
          })
          .map((country, index) => {
            return (
              <>
                <div
                  onClick={() => {
                    chosenCountry = country;
                    onSaveCountry(chosenCountry);
                    console.log(chosenCountry);
                    onSaveOpen(true);
                  }}
                  className="card-container"
                  key={index}
                >
                  <img
                    className="card-container__image"
                    src={country.flags.png}
                    alt="Pictures of all the country flags"
                  />
                  <h3 className="card-container__name">
                    {country.name.common}
                  </h3>
                  <p className="card-container__population">
                    <span className="card-container__span">Population:</span>
                    {country.population}
                  </p>
                  <p className="card-container__region">
                    <span className="card-container__span">Region:</span>
                    {country.region}
                  </p>
                  <p className="card-container__capital">
                    <span className="card-container__span">Capital:</span>
                    {country.capital}
                  </p>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}

export default Countries;
