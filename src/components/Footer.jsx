import React from 'react'
import '../App.css';

export default function Footer() {
  return (
    <div className='Footer'>
        <div id='foot-text'>
            <p className="para1">Preview of Spotify</p>
            <p className="para2">
            Sign up to get unlimited songs and podcasts with occasional ads. No
            credit card needed.
            </p>
        </div>
        <button id="signup" >Sign up Free</button>
    </div>
  )
}
