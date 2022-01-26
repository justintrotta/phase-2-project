import React, {useEffect, useState} from "react"
import {Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import SongContainer from "./SongContainer";
import AlbumContainer from "./AlbumContainer";
import ArtistContainer from "./ArtistContainer";
import About from "./About";
// import MusicBrainzApi from "musicbrainz-api";
// import billboards from "billboard-music"


function App() {

    const dbUrl = "http://localhost:3001/music"

    const [music, setMusic] = useState([])

    useEffect(() => {
        fetch(dbUrl).then((r) => r.json()).then(setMusic)
    }, [])

    // const mbApi = new MusicBrainzApi({
    //     baseUrl: "http://musicbrainz.org/",
    //     appName: "phase-2-project",
    //     appVersion: "0.0.01",
    //     appMail: "justindavidtrotta@gmail.com"
    // })

    // const d = new Date();
    // var ds;

    // d.setDate(d.getDate() + 20);

    // ds = (  (d.getFullYear() + '-')
    //          + ('0' + (d.getMonth())).slice(-2) + '-'
    //          + ('0' + d.getDate()).slice(-2))
    // console.log(ds)

    // billboards (data => {
    //     console.log (data)
    // }, 
    //     {
    //        top: '100', // global - 200 - 100 - artist
    //        date: "2014-07-05"
    //     }
    // )


    return(
    <div className="app">
    <Navbar/>
    {/* <Routes>
        <Route exact path="/songs" element={<SongContainer api={mbApi}/>}/>
        <Route exact path="/artists" element={<ArtistContainer api={mbApi}/>}/>
        <Route exact path="/albums" element={<AlbumContainer api={mbApi}/>}/>
        <Route exact path="/" element={<About />}/>
    </Routes>  */}
    <Routes>
        <Route exact path="/songs" element={<SongContainer music={music} />}/>
        <Route exact path="/artists" element={<ArtistContainer music={music} />}/>
        <Route exact path="/albums" element={<AlbumContainer music={music} />}/>
        <Route exact path="/" element={<About />}/>
    </Routes>
    </div>
    )
}


export default App