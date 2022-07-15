import "./App.css";
import React, { useState } from "react";

import Nav from "./components/Nav/Nav.js";
import Countries from "./components/List/Countries.js";
import Filter from "./components/Filter/Filter.js";
import Search from "./components/Search/Search.js";
import Modal from "./components/Modal/Modal.js";

function App() {
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState([]);
  const [opened, setOpened] = useState(false);

  const saveRegionData = (enteredRegion) => {
    const regionData = enteredRegion;
    setRegion(regionData);
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
    document.querySelector(".App__filter--container").classList.add("none");
    setOpened(openData);
    console.log(openData);
  };

  const closedData = (back) => {
    const closeData = back;
    document.body.classList.remove("modal-open");
    document.querySelector(".App__filter--container").classList.remove("none");
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
