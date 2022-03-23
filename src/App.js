import React from 'react'
import Album from './Component/Album/Album';
import Artists from './Component/Artist/Artist';
import Images from './Component/Image/Images';

function App() {
  return (
    <div className='App'>
        <h1>Playlist on spotify</h1>
        <table className='table-playlist'>
          <tr>
            <td rowSpan>
                <Images/>
            </td>
            <td>
                    <td>
                        <h2><Album/></h2>
                    </td>
            <tr>
            <td>
              <h3><Artists/></h3>
            </td>
            </tr>
            </td>
            </tr>
            <tr>
                <td>
                    <button className='btn-select'>Select</button>
                </td>
            </tr>
        </table>

        <style jsx>
        {`
        .App{
            background-color:#00FFFF;
            padding:20px;
            height:100vh;
            text-align:center;
        }
        .table-playlist{
          background-color: #F0F8FF;
          padding:10px;
          margin:0px 10px 0 10px;
          width:100%;
        }
        .btn-select{
          padding:20px;
          border:none;
          border-radius:10px;
          text-transform:uppercase;
          cursor:pointer;
          background-color:green;
        }
        `}
        </style>
    </div>
  )
}

export default App