import React from "react"
import CollapseCard from "./CollapseCard"

function AlbumContainer({music}) {

    const albumMap = music.map((song) => {
        return (<CollapseCard 
            key={song.id}
            title={song.song}
            x={song.artist}
            y={song.album}
            z={song.date}
            image={song.image}>

            </CollapseCard>)
    })

    return (
        <div className="albums">
            {albumMap}
        </div>
    )

}

export default AlbumContainer;