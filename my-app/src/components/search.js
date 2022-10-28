import React from "react";
import ApiContainer from "./apicontainer";

function Search({search, setSearch, apis, onAddApi, filterState, setFilterState}) {
    return (
      <div className="searchContainer">
      <label>
        <strong className="filterText">Filter Categoreis:</strong>
        <select onChange={(e) => setFilterState(e.target.value)} value={filterState} className="filter">
          <option value="All">All</option>
          <option value="Animals">Animals</option>
          <option value="Anime">Anime</option>
          <option value="Blockchain">Blockchain</option>
          <option value="Books">Books</option>
          <option value="Business">Business</option>
          <option value="Development">Development</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Environment">Environment</option>
          <option value="Finance">Finance</option>
          <option value="Geocoding">Geocoding</option>
          <option value="Government">Government</option>
          <option value="Music">Music</option>
          <option value="Programming">Programming</option>
          <option value="Transportation">Transportation</option>
          
        </select>
      </label>
        <input
          value = {search}
          type="text"
          placeholder="Search APIs"
          onChange={(e) => setSearch(e.target.value)}
          className="searchBar"
        />
        <br/>
        <br/> 
        <br/>
        <br/>
        <ApiContainer apis={apis} onApiClick={onAddApi}/>
    </div>
    

    );
}

export default Search;