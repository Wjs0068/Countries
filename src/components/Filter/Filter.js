import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Filter({ onSaveRegion }) {
  var region;

  const handleChange = () => {
    onSaveRegion(region);
  };

  return (
    <FormControl
      sx={{
        m: 1,
        minWidth: 150,
        backgroundColor: "white",
        margin: 0,
      }}
    >
      <InputLabel id="demo-simple-select-autowidth-label">
        Filter By Region
      </InputLabel>
      <Select
        inputProps={{ "data-testid": "input-for-filter" }}
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={region}
        onChange={(event) => {
          console.log(event.target.value);
          if (event.target.value === "All") {
          }
          region = event.target.value;
          handleChange();
        }}
        label="Age"
      >
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="Africa">Africa</MenuItem>
        <MenuItem value="Americas">Americas</MenuItem>
        <MenuItem value="Asia">Asia</MenuItem>
        <MenuItem value="Europe">Europe</MenuItem>
        <MenuItem value="Oceania">Oceania</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Filter;
