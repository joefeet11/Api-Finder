import React from "react";
import {NavLink } from "react-router-dom"

function Header() {

    return (
        <nav>
            <NavLink  to={"/"}>Home</NavLink> 
            
            <NavLink  to={"/Search"}>Search</NavLink>
            
            <NavLink  to={"/Addapi"}>Add API</NavLink>
            
            <NavLink  to={"/Myapi"}>My APIs</NavLink>
        </nav>
    );
}

export default Header;
