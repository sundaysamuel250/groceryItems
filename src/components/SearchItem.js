import React from "react";
import "./SearchItem.css";

const SearchItem = ({ search, setSearch }) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlForm="search">search</label>
      <input
        id="search"
        type="text"
        role="searchBox"
        placeholder="searchItem"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;
