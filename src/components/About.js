import React from "react";

function About () {
    const aboutStyle = {
      backgroundColor: "#FFE799", 
      lineHeight: "1px", 
      padding:"300px", 
      fontFamily:'Pixeled'
    }
    return (
        <div id="about" style={aboutStyle}>

        <p>Musix is your one-stop-shop for exploring different artists, albums, and songs.</p>

        </div>
    )
}

export default About;