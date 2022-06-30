import React, { useState } from "react";
import TextField from "@mui/material/TextField";

function Search() {
  const [countrySearch, setCountrySearch] = useState();

  return (
    <div className="main">
      <div className="search">
        <TextField
          sx={{
            backgroundColor: "white",
            maxWidth: "400px",
            minWidth: "400px",
          }}
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
          onChange={(event) => {
            setCountrySearch(event.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default Search;
