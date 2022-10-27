import React from "react";
import ApiContainer from "./apicontainer";

function Search({search, setSearch, apis, onAddApi}) {
    return (
        <div className="ui large fluid icon input">
      <input
        value = {search}
        type="text"
        placeholder="Search APIs"
        onChange={(e) => setSearch(e.target.value)}
      />
      <i className="circular search link icon"></i>
      <ApiContainer apis={apis} onApiClick={onAddApi}/>
    </div>
    

    );
}

export default Search;