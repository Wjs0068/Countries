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
  const [country, setCountry] = useState([]);
  const [opened, setOpened] = useState(false);

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

  const openedData = (clickedCountry) => {
    const openData = clickedCountry;
    document.body.classList.add("modal-open");
    setOpened(openData);
    console.log(openData);
  };

  const closedData = (back) => {
    const closeData = back;
    document.body.classList.remove("modal-open");
    setOpened(back);
    console.log(closeData);
  };

  return (
    <div className="App">
      <Nav />

      {opened ? <Modal onSaveClose={closedData} country={country} /> : <></>}
      <div className="App__filter--container">
        <Search onSaveSearch={saveSearchData} />
        <Filter onSaveRegion={saveRegionData} />
      </div>

      <Countries
        onSaveCountry={saveCountryData}
        onSaveOpen={openedData}
        search={search}
        region={region}
      />
    </div>
  );
}

export default App;
