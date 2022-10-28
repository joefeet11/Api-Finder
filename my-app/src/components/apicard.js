import React from "react";

function ApiCard({api, onApiClick}) {

  function handleClick(api) {
    onApiClick(api)
  }
    
    return(
        <div onClick={() => handleClick(api) } key ={api.Link} className="apiCard">
          <h1 >{api.API}</h1>
            <p ><strong>Description <br/></strong>{api.Description}</p>
            <p ><strong>Link<br/></strong>{api.Link}</p>
            <p ><strong>Category<br/></strong>{api.Category}</p>
            <p ><strong>Authorization<br/></strong>{api.Auth || "None"}</p>
        </div>
    )
}
export default ApiCard