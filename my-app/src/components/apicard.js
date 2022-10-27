import React from "react";

function ApiCard({api, onApiClick}) {

  function handleClick(api) {
    onApiClick(api)
  }
    
    return(
        <div onClick={() => handleClick(api) }className = "apiCard" key ={api.Link}>
        <h5 className="card-title">{api.API}</h5>
          <p className="card-text">{api.Description}</p>
          <p className="card-text">{api.Link}</p>
          <p className="card-text">{api.Category}</p>
          <p className="card-text">{api.Auth}</p>
          
          
        </div>
    )
}
export default ApiCard