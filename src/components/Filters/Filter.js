import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Filter(props) {
  // const [region, setRegion] = useState("none");
  var region;

  const handleChange = async (event) => {
    console.log(event.target.value);
    region = event.target.value;
    props.onSaveRegion(region);
  };

  return (
    <div>
      <FormControl
        sx={{
          m: 1,
          minWidth: 150,
          backgroundColor: "white",
          marginTop: "2rem",
        }}
      >
        <InputLabel id="demo-simple-select-autowidth-label">
          Filter By Region
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={region}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em></em>
          </MenuItem>
          <MenuItem value="Africa">Africa</MenuItem>
          <MenuItem value="Americas">Americas</MenuItem>
          <MenuItem value="Asia">Asia</MenuItem>
          <MenuItem value="Europe">Europe</MenuItem>
          <MenuItem value="Oceania">Oceania</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Filter;
