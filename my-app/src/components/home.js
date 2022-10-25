import React from "react";
import ApiContainer from "./apicontainer";

function Home({apis}) {
    return (
        <div id="home">
            <ApiContainer apis={apis}/>
        </div>
    );
}

export default Home;