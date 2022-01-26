import React from 'react';
import Collapsible from "react-collapsible";

function CollapseCard({title, x = "", y = "", z = "", image = "https://cdn.iconscout.com/icon/premium/png-256-thumb/no-image-3215175-2672258.png"}) {
    return (
        <Collapsible trigger={title}>
            <p>{x}</p>
            <p>{y}</p>
            <p>{z}</p>
            <img className="image" src={image} alt={y}/>
        </Collapsible>
    )
}

export default CollapseCard;