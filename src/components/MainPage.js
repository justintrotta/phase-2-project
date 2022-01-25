import React from "react"
import { Route, Switch } from "react-router-dom";
import SongContainer from "./SongContainer";
import AlbumContainer from "./AlbumContainer";
import ArtistContainer from "./ArtistContainer";

function MainPage() {
<nav className="navbar">
    <Switch>
        <Route path="/songs">
          <SongContainer />
        </Route>
        <Route path="/artists">
          <ArtistContainer />
        </Route>
        <Route path="/albums">
          <AlbumContainer />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
</nav>
}

export default MainPage