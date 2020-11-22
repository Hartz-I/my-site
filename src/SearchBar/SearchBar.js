import React from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  return (
    <div className="Search">
      <input
        type="search"
        placeholder={props.placeholder}
        onChange={props.changed}
        className="searchBox"
      ></input>
    </div>
  );
};

export default SearchBar;
