import React, {useEffect, useState} from "react"

function SongContainer({api}) {

    const [songs, setSongs] = useEffect([])
            
    setSongs()
    return(
        <div>
            {songs}
        </div>
    )
}

export default SongContainer;