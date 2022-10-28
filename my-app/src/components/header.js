import React from "react";
import {NavLink } from "react-router-dom"

function Header() {
    
    return (
        <nav>
            <div className="linkContainer"> 
                <h1 className="headerText">Find an API for Your Next Project Below!</h1>
                <div className="links">
                <NavLink  to={"/"}>Home</NavLink> 
                <br/>
                <NavLink  to={"/Search"}>Search</NavLink>
                <br/>
                <NavLink  to={"/Myapi"}>My APIs</NavLink>  
                </div> 
            </div>
        </nav>
    );
}

export default Header;
