import React from 'react';
import Collapsible from "react-collapsible";

function CollapseCard({title, x = "", y = "", z = "", image = "https://cdn.iconscout.com/icon/premium/png-256-thumb/no-image-3215175-2672258.png"}) {

    const collapStyle = {
        background: "green"
    }
    return (
        <Collapsible trigger={title} style={collapStyle}>
            <p>{x}</p>
            <p>{y}</p>
            <p>{z}</p>
            <img className="image" src={image} alt={y}/>
        </Collapsible>
    )
}

export default CollapseCard;