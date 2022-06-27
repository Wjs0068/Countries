import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Reusable/Card.js";

function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((countries) => {
      setCountries(countries.data);
      console.log(countries);
    });
  }, []);

  return (
    <div className="list-container">
      {countries.map((country, index) => {
        console.log(country.name.common);
        return (
          <div key={index}>
            <p>{country.name.common}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Countries;
