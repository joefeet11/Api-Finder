import React from "react";
import ApiContainer from "./apiContainer";

function Home({ apis }) {
    return (
        <div id="home">
            <ApiContainer apis={apis}/>
        </div>
    );
}

export default Home;