import React from "react"
import CollapseCard from "./CollapseCard"

function ArtistContainer({music}) {

    const artistMap = music.map((song) => {
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
        <div className="artists">
            {artistMap}
        </div>
    )

}

export default ArtistContainer;