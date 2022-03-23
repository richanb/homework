import React from 'react'
import data from './data';

function App() {
  return (
    <div className='App'>
        <h1>Playlist On Spotify</h1>
        <img src={data.album.images[1].url} alt="Queen"></img>
        <p id='playlist-title'>{data.album.name}</p>
        <p id='playlist-artist'>{data.artists.artists}</p>
        <p id='playlist-album'>{data.album.album_type}</p>
        <button id='playlist-btn' type='button'>Select</button>

        <style jsx>
        {`
        .App{
            background-color:#00FFFF;
            padding:20px;
            height:100vh;
            text-align:center;
        }
        `}
        </style>
    </div>
  )
}

export default App