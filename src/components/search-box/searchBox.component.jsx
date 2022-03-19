import React from "react";
import "./searchBox.styles.css";

export const SearchBox = (props) => {
  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder={props.placeholder}
        onChange={props.changeHandler}
      />
    </div>
  );
};
