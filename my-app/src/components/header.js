import React from "react";
import {NavLink } from "react-router-dom"

function Header() {
    
    
    
    return (
        <nav>
            <div className="linkContainer"> 
                <h1>Find an API for Your Next Project below!</h1>
                <h2>Here's 5 APIs picked just for you</h2>
                <div className="links">
                <NavLink  to={"/"}>Home</NavLink> 
                <br/>
                <NavLink  to={"/Search"}>Search</NavLink>
                <br/>
                <NavLink  to={"/Addapi"}>Add API</NavLink>
                <br/>
                <NavLink  to={"/Myapi"}>My APIs</NavLink>  
                </div> 
            </div>
        </nav>
    );
}

export default Header;
