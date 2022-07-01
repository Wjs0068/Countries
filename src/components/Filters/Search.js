import React from "react";
import TextField from "@mui/material/TextField";

function Search(props) {
  // const [countrySearch, setCountrySearch] = useState();

  var search;

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
            search = event.target.value;
            props.onSaveSearch(search);
          }}
        />
      </div>
    </div>
  );
}

export default Search;
