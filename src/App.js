import "./App.css";
import React, { useState } from "react";
import Nav from "./components/Nav/Nav.js";
import Countries from "./components/List/Countries.js";
import Filter from "./components/Filters/Filter.js";

function App() {
  const [region, setRegion] = useState("");

  const saveRegionData = (enteredRegion) => {
    const regionData = enteredRegion;
    setRegion(regionData);
    console.log(regionData);
  };

  return (
    <div className="App">
      <Nav />
      <Filter onSaveRegion={saveRegionData} />
      <Countries region={region} />
    </div>
  );
}

export default App;
