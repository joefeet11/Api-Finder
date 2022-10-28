import React from "react";
import ApiContainer from "./apicontainer";

function Home({apis, onAddApi}) {
    return (
        <div id="home" className="searchContainer">
            <ApiContainer apis={apis} onApiClick={onAddApi} />
        </div>
    );
}

export default Home;