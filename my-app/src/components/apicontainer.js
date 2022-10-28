import React from "react";
import ApiCard from "./apicard";

function ApiContainer({apis, onApiClick}) {
    const apiData = apis.map(api => (
    <ApiCard key = {api.Link}
        api={api}
        onApiClick={onApiClick}
    />
    ))

    return (
        <div className="apiContainer">
            {apiData}
        </div>
    )
}

export default ApiContainer