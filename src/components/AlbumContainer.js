import React, {useState, useEffect} from "react"
import CollapseCard from "./CollapseCard"

function AlbumContainer({music}) {

    const [finalMap, setFinalMap] = useState()
    const albumObjArr = []

    function albumHandler() {
    const albumSet = new Set()

    music.forEach((o) => albumSet.add(o.album))

    const albumArr = Array.from(albumSet)

    for (let i = 0; i < albumArr.length; i++) {
        let newObj = {
            album: albumArr[i],
            albums: "",
            songs: "", 
            images: []
        }
        albumObjArr.push(newObj)
    }

    albumObjArr.forEach((o) => {
        const albumSet = new Set()
        const albumInfo = music.filter((x) => x.album === o.album)
        albumInfo.forEach((y) => {
            albumSet.add(y.album)
            o.songs += y.song + ", "
            o.images.push(y.image)
        })
        const albumSetArr = Array.from(albumSet)
        o.albums = albumSetArr.join(", ")

    })
    const albumMap = albumObjArr.map((song) => {
        return (<CollapseCard 
            key={song.album}
            title={song.album}
            x={song.artist}
            y={song.songs}
            z={song.date}
            image={song.images[0]}>
            </CollapseCard>)
    })
        setFinalMap(albumMap);
}
                
    useEffect(() => albumHandler(), [])

    return(
        <div id="about" style={{backgroundColor: "#FFE799", lineHeight: "40px", padding:"400px", fontFamily:'Pixeled'}}>

            {finalMap}
        </div>
    )

}

export default AlbumContainer;