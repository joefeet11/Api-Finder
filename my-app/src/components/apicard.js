import React from "react";

function ApiCard({api}) {
    //console.log(api)
    return(
        <div>
        {/* <h5 className="card-title">{api.entries[0].api}</h5> */}
          <p className="card-text">{api.entries[0].Description}</p>
          <p className="card-text">{api.entries[0].Link}</p>
          <p className="card-text">{api.entries[0].Category}</p>
          
          
        </div>
    )
}
export default ApiCard