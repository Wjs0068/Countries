import React from "react";
import TextField from "@mui/material/TextField";

import useMediaQuery from "@mui/material/useMediaQuery";

function Search({ onSaveSearch }) {
  // const [countrySearch, setCountrySearch] = useState();
  const matches = useMediaQuery("(min-width:300px)");
  var search;

  const changeHandler = (event) => {
    search = event.target.value;
    onSaveSearch(search);
  };

  return (
    <div className="main">
      <div className="search">
        <TextField
          inputProps={{ "data-testid": "input-for-search" }}
          sx={{
            backgroundColor: "white",

            width: "270px",

            marginRight: "1rem",
          }}
          id="outlined-basic"
          variant="outlined"
          fullWidth
          value={search}
          label="Search"
          onChange={(event) => {
            changeHandler(event);
          }}
        >{`(min-width:300px) matches: ${matches}`}</TextField>
      </div>
    </div>
  );
}

export default Search;
