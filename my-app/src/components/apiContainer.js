import React from "react";
import ApiCard from "./apiCard";

function ApiContainer({apis}) {

    return (
        <div>
            {apis.map(api => <ApiCard key={api.API} api={api}/>)}
        </div>
    )
}

export  default ApiContainer