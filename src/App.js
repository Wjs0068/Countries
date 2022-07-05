import "./App.css";
import React, { useState } from "react";
import Nav from "./components/Nav/Nav.js";
import Countries from "./components/List/Countries.js";
import Filter from "./components/Filters/Filter.js";
import Search from "./components/Filters/Search.js";
import Modal from "./components/Modal/Modal.js";

function App() {
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("");

  const saveRegionData = (enteredRegion) => {
    const regionData = enteredRegion;
    setRegion(regionData);
    console.log(regionData);
  };

  const saveSearchData = (enteredData) => {
    const searchData = enteredData;
    setSearch(searchData);
    console.log(searchData);
  };

  const saveCountryData = (enteredCountry) => {
    const countryData = enteredCountry;
    setCountry(countryData);
    console.log(countryData);
  };

  return (
    <div className="App">
      <Nav />
      <div className="App__filter--container">
        <Search onSaveSearch={saveSearchData} />
        <Filter onSaveRegion={saveRegionData} />
      </div>

      <Countries
        onSaveCountry={saveCountryData}
        search={search}
        region={region}
      />
      <Modal country={country} />
    </div>
  );
}

export default App;
