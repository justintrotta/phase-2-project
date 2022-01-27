import React, {useState, useEffect} from "react"
import CollapseCard from "./CollapseCard"


function ArtistContainer({music}) {

    const [finalMap, setFinalMap] = useState()
    const artistObjArr = []

    function artistHandler() {
    const artistSet = new Set()

    music.forEach((o) => artistSet.add(o.artist))

    const artistArr = Array.from(artistSet)

    for (let i = 0; i < artistArr.length; i++) {
        let newObj = {
            artist: artistArr[i],
            albums: "",
            songs: "", 
            images: []
        }
        artistObjArr.push(newObj)
    }

    artistObjArr.forEach((o) => {
        const albumSet = new Set()
        const artistInfo = music.filter((x) => x.artist === o.artist)
        artistInfo.forEach((y) => {
            albumSet.add(y.album)
            o.songs += y.song + ", "
            o.images.push(y.image)
        })
        const albumSetArr = Array.from(albumSet)
        o.albums = albumSetArr.join(", ")

    })
    const artistMap = artistObjArr.map((song) => {
        return (<CollapseCard 
            key={song.artist}
            title={song.artist}
            x={song.albums}
            y={song.songs}
            z={song.date}
            image={song.images[0]}>
            </CollapseCard>)
    })
        setFinalMap(artistMap);
}
                
    useEffect(() => artistHandler(), [])

    return(
        <div id="about" style={{backgroundColor: "#FFE799", lineHeight: "40px", padding:"400px", fontFamily:'Pixeled'}}>

            {finalMap}
        </div>
    )

}

export default ArtistContainer; 