import React from "react";

function ApiCard({ api }) {
    return(
        <div class={card}>
          <h5 className="card-title">{api.API}</h5>
            <p className="card-text">{api.Description}</p>
            <p className="card-text">{api.Link}</p>
            <p className="card-text">{api.Category}</p>
        </div>
    )
}
export default ApiCard