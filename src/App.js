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
    setOpened(openData);
    console.log(openData);
  };

  const closedData = (back) => {
    const closeData = back;
    setOpened(back);
    console.log(closeData);
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
        onSaveOpen={openedData}
        search={search}
        region={region}
      />
      {opened ? (
        <Modal onSaveClose={closedData} country={country} />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
