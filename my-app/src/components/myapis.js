import React from "react";
import ApiContainer from "./apicontainer";

function Myapi({apis, onRemoveApi}) {
    return (
        <div class="home">
            <ApiContainer apis={apis} onApiClick ={onRemoveApi} />
        </div>
    );
}

export default Myapi;