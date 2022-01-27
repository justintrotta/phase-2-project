import React from "react"    
import {NavLink} from "react-router-dom"

function Navbar() {

    const linkStyles = {
        display: "inline-block",
        width: "50px",
        height: "20px",
        margin: "5px",
        padding: "5px",
        background: "lightyellow",
        textDecoration: "none",
        color: "Black",
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