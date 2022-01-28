import React, {useEffect, useState} from "react"
import {Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import SongContainer from "./SongContainer";
import AlbumContainer from "./AlbumContainer";
import ArtistContainer from "./ArtistContainer";
import About from "./About";
import SongForm from "./SongForm";

function App() {

    const[newSong, setNewSong] = useState({})

    const dbUrl = "http://localhost:3001/music"
    const [music, setMusic] = useState([])
    useEffect(() => {
        fetch(dbUrl).then((r) => r.json()).then(setMusic)
    }, [])

    function handleNewSong(o) {
        setNewSong(o)
        setMusic([...music, newSong])
    }


    return(
    <div className="app">
    <Navbar/>
    <Routes>
        <Route exact path="/songs" element={<SongContainer music={music} />}/>
        <Route exact path="/artists" element={<ArtistContainer music={music} />}/>
        <Route exact path="/albums" element={<AlbumContainer music={music} />}/>
        <Route exact path="/addsongform" element={<SongForm setNewSong={handleNewSong} />}/>
        <Route exact path="/" element={<About />}/>
    </Routes>
    </div>
    )
}


export default App