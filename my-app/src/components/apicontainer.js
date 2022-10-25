import React from "react";
import ApiCard from "./apicard";

function ApiContainer({apis}) {

    return (
        <div>
            <ApiCard api = {apis}/>
        </div>
    )
}

export  default ApiContainer