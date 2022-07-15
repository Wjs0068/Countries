import React from "react";
import TextField from "@mui/material/TextField";

import useMediaQuery from "@mui/material/useMediaQuery";

function Search(props) {
  // const [countrySearch, setCountrySearch] = useState();
  const matches = useMediaQuery("(min-width:300px)");
  var search;

  return (
    <div className="main">
      <div className="search">
        <TextField
          sx={{
            backgroundColor: "white",

            width: "270px",

            marginRight: "1rem",
          }}
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
          onChange={(event) => {
            search = event.target.value;
            props.onSaveSearch(search);
          }}
        >{`(min-width:300px) matches: ${matches}`}</TextField>
      </div>
    </div>
  );
}

export default Search;
