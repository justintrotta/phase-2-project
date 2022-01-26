import React from 'react';
import Collapsible from "react-collapsible";

function CollapseCard({title, x, y, z, image}) {
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