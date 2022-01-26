import React, {useEffect, useState} from "react"
import CollapseCard from "./CollapseCard"

function SongContainer({music}) {

    const songMap = music.map((song) => {
        return (<CollapseCard 
            key={song.id}
            title={song.song}
            x={song.artist}
            y={song.album}
            z={song.date}
            image={song.image}>

            </CollapseCard>)
    })
            
    return(
        <div className="songs">
           {songMap} 
        </div>
    )
}

export default SongContainer;