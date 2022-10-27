import React from "react";
import ApiContainer from "./apicontainer";

function Myapi({apis, onRemoveApi}) {
    return (
        <div id="home">
            <h1 style={{ color: "firebrick" }}>
                My Api page
                <ApiContainer apis={apis} onApiClick ={onRemoveApi} />

            </h1>
        </div>
    );
}

export default Myapi;