import React from "react"    
import {NavLink} from "react-router-dom"

function Navbar() {

    const linkStyles = {
        display: "inline-flex",
        width: "50px",
        height: "20px",
        margin: "5px",
        padding: "5px",
        background: "lightyellow",
        textDecoration: "none",
        color: "Black",
      };

    const navStyle = {
        display: "flex",
        "justify-content": "center"
    }


return (
    <div className="navbar" style={navStyle}>
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
            to="/addsongform"
            exact
            style={linkStyles}
        >
        Add
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