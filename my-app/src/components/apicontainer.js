import React from "react";
import ApiCard from "./apicard";

function ApiContainer({apis}) {

    const apiData = apis.map(api => (
    <ApiCard key = {api.Link}
    api={api}
    />
    ))

    return (
        <div>
            {apiData}
        </div>
    )
}

export default ApiContainer