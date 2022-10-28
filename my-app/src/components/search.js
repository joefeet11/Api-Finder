import React from "react";
import ApiContainer from "./apicontainer";

function Search({search, setSearch, apis, onAddApi}) {
    return (
      <div className="searchContainer">
        <input
          value = {search}
          type="text"
          placeholder="Search APIs"
          onChange={(e) => setSearch(e.target.value)}
          className="searchBar"
        />
        <ApiContainer apis={apis} onApiClick={onAddApi}/>
    </div>
    

    );
}

export default Search;