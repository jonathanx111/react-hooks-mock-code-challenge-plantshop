import React from "react";

function Search({ searchInput, setSearchInput }) {


  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        onChange={e => setSearchInput(e.target.value)}
        value={searchInput}
        type="text"
        id="search"
        placeholder="Type a name to search..."
      />
    </div>
  );
}

export default Search;
