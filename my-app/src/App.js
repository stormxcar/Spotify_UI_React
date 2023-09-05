import "./App.css";
import Navbar from "./Component/Navbar";
import DetailSong from "./Component/DetailSong";
import ListSongs from "./Component/ListSongs";
import { songs } from "./Component/Context";
import dataSongs from './data/songs.json';
import Playing from "./Component/Playing";
import { useState } from "react";

function App() {
  const [song, setSong] = useState(dataSongs);

  const HandleSetSong = (idSong) => {
    const song = dataSongs.find(song => song.id === idSong);
    if(!song)
      setSong(dataSongs[0]);
    else
      setSong(song);
  }
  return (
    <div className="App">
      <songs.Provider value={{dataSongs , song, HandleSetSong}}>
            <Navbar></Navbar>
            <div className="detail">
              <DetailSong></DetailSong>
              <ListSongs></ListSongs>
            </div>
            <Playing></Playing>
      </songs.Provider>
    </div>
  );
}

export default App;
