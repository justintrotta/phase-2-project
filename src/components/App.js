import React, {useState} from "react"
import {Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import SongContainer from "./SongContainer";
import AlbumContainer from "./AlbumContainer";
import ArtistContainer from "./ArtistContainer";
import About from "./About";
// import MusicBrainzApi from "musicbrainz-api";
import billboards from "billboard-music"


function App() {

    // const mbApi = new MusicBrainzApi({
    //     baseUrl: "http://musicbrainz.org/?fmt=json",
    //     appName: "phase-2-project",
    //     appVersion: "0.0.01",
    //     appMail: "justindavidtrotta@gmail.com"
    // })

    const d = new Date();
    var ds;

    d.setDate(d.getDate() + 20);

    ds = (  (d.getFullYear() + '-')
             + ('0' + (d.getMonth())).slice(-2) + '-'
             + ('0' + d.getDate()).slice(-2))
    console.log(ds)

    billboards (data => {
        console.log (data)
    }, 
        {
           top: '100', // global - 200 - 100 - artist
           date: "2014-07-05"
        }
    )

    
    const [chart, setChart] = useState("")

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
        <Route exact path="/songs" element={<SongContainer />}/>
        <Route exact path="/artists" element={<ArtistContainer />}/>
        <Route exact path="/albums" element={<AlbumContainer />}/>
        <Route exact path="/" element={<About />}/>
    </Routes>
    </div>
    )
}


export default App