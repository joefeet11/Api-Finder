import React from "react";
import {NavLink } from "react-router-dom"

function Header() {
    
    
    
    return (
        <nav>
            <NavLink  to={"/"}>Home</NavLink> 
            <br/>
            <NavLink  to={"/Search"}>Search</NavLink>
            <br/>
            <NavLink  to={"/Addapi"}>Add API</NavLink>
            <br/>
            <NavLink  to={"/Myapi"}>My APIs</NavLink>
        </nav>
    );
}

export default Header;
