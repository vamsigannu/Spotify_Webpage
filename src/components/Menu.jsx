import React from 'react';
import '../App.css';
import spotifywhite from '../Assests/white_logo.png'
import home from '../Assests/home_icon.png'
import search from '../Assests/search_icon.png'
import book from '../Assests/Library_icon.png'
import add from '../Assests/plus_icon1.png'
import fav from '../Assests/fav.png'

export default function Menu() {
  return (
    <div className='menu'>
      <div className='spotiy-menu'>
        <div className='logo-head'>
          <img src={spotifywhite} alt="logo" id="img1" />
          <p id="p1">Spotify</p>
        </div>
        <div className='logo'>
          <img src={home} alt="home_icon" id="img2" />
          <p id="p2">Home</p>
        </div>
        <div className='logo'>
          <img src={search} alt="search_icon" id="img3" />
          <p id="p3">Search</p>
        </div>
      </div>

      <div className='library-menu'>
        <div className="librarybar">
            <div className='lib manage'>
              <img src={book} alt="books-icon" id="img4" />
              <p id="p4">Library</p>
            </div>
            <img src={add} alt="add" id="img5" />
        </div>

        <div className='playlist'>
          <img src={fav} alt='' />
          <div id="playtest">
            <p><b>My Favorite</b></p>
            <p id='p5'>playlist.Spotify</p>
          </div>
        </div>

        <div className='others'>
          <div className="p_grid">
            <p className="pg p7">Legal</p>
            <p className="pg p8">Privacy_Center</p>
            <p className="pg p9">Privacy_Policy</p>
            <p className="pg p10">Cookies</p>
            <p className="pg p11">About_Ads</p>
            <p className="pg p12">Accessibility</p>
          </div>
            <button type="submit" value="English" id="input_Lang" >English</button>
        </div>


      </div>
  </div>
  )
}
