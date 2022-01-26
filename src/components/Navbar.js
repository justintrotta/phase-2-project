import React from "react"    
import {NavLink} from "react-router-dom"

function Navbar() {

    const linkStyles = {
        display: "inline-block",
        width: "50px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "blue",
        textDecoration: "none",
        color: "white",
      };


return (
    <div className="navbar">
        <NavLink 
            to="/songs"
            exact
            style={linkStyles}
            >
        Songs
        </NavLink>
        <NavLink 
            to="/albums"
            exact
            style={linkStyles}
        >
        Albums
        </NavLink>
        <NavLink 
            to="/artists"
            exact
            style={linkStyles}
        >
        Artists
        </NavLink>
        <NavLink 
            to="/"
            exact
            style={linkStyles}
        >
        About
        </NavLink>
    </div>
    )
}

export default Navbar