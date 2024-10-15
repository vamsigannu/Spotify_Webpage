import React, { useState, useRef, useEffect} from 'react';
import '../App.css';
import Menu from './Menu';
import bell from '../Assests/bell icon.png';
import profile from '../Assests/profile.jpg';
import fav from '../Assests/fav temp.jpg';
import timer from '../Assests/time1.png';
import play from '../Assests/play.png';
import pause from '../Assests/pause1.png';
import stopIcon from '../Assests/stop.png'; // Add stop icon
import volumeIcon from '../Assests/volume.png'; // Add volume icon
import audioFile1 from '../Assests/audio/Aa Rojulu Malli Raavu.mp3';
import audioFile2 from '../Assests/audio/Thala Vanchi Eragade.mp3';
import audioFile3 from '../Assests/audio/Arjan Vailly.mp3';
import audioFile4 from '../Assests/audio/Kadalalle.mp3';
import audioFile5 from '../Assests/audio/Telisiney Na Nuvvey.mp3';
import audioFile6 from '../Assests/audio/Kashmeeru.mp3';

export default function Container() {
  const songs = [
    { id: 1, title: 'Aa Rojulu Malli Raavu', src: audioFile1, length: '4:13' },
    { id: 2, title: 'Thala Vanchi Eragade', src: audioFile2, length: '4:11' },
    { id: 3, title: 'Arjan Vailly', src: audioFile3, length: '3:02' },
    { id: 4, title: 'Kadalalle', src: audioFile4, length: '4:21' },
    { id: 5, title: 'Telisiney Na Nuvvey', src: audioFile5, length: '4:12' },
    { id: 6, title: 'Kashmeeru', src: audioFile6, length: '3:35' }
  ];

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const audioRef = useRef(null);


  const [currentTime, setCurrentTime] = useState(0);

const handleSeekChange = (e) => {
  const seekTime = e.target.value;
  audioRef.current.currentTime = seekTime;
  setCurrentTime(seekTime);
};

useEffect(() => {
  const updateTime = () => setCurrentTime(audioRef.current.currentTime);
  audioRef.current.addEventListener('timeupdate', updateTime);

  return () => {
    audioRef.current.removeEventListener('timeupdate', updateTime);
  };
}, []);

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
};



  const handleClick = (song) => {
    if (currentSong && currentSong.id === song.id) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    } else {
      audioRef.current.src = song.src;
      audioRef.current.play();
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };

  const handleStop = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  const handleVolumeChange = (event) => {
    audioRef.current.volume = event.target.value;
  };

  return (
    <div className='body'>
      <Menu />
      <div className='container'>
        <div className='container-over'></div>
        <div className='theme'>
          <div className='nav'>
            <button id='btn'>Explore Premium</button>
            <img src={bell} alt='' id='bell' />
            <img src={profile} alt='' id='user' />
          </div>
          <div className='albumdetails'>
            <img src={fav} alt='' id='myimage' />
            <div className='album'>
              <h1 id='albumtitle'><b>My Favourites</b></h1>
              <div className='name'>
                <img src={profile} alt='' id='user2' />
                <p>My Name.</p><p>6 songs</p>
              </div>
            </div>
          </div>
        </div>
        <div className='songdata'>
          <div className='songdata over'></div>
          <table>
            <thead>
              <tr className='tablehead'>
                <th className="child-1">#</th>
                <th className="child-2">Title</th>
                <th className="child-3">
                  <img src={timer} alt='' />
                </th>
              </tr>
            </thead>
            <tbody>
              {songs.map(song => (
                <tr key={song.id}>
                  <td>{song.id}</td>
                  <td id='td2'>
                    <img
                      src={isPlaying && currentSong && currentSong.id === song.id ? pause : play}
                      alt=''
                      onClick={() => handleClick(song)}
                      style={{ cursor: 'pointer' }} 
                    />
                    {song.title}
                  </td>
                  <td>{song.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

       
    <div className='audio-controls'>
  {currentSong && (
    <div className='fullconrols'>
      <div className='controlrow'><p>Now Playing: {currentSong.title}</p>

      <label>
            <img src={volumeIcon} alt='Volume' />
            <input 
              type='range' 
              min='0' 
              max='1' 
              step='0.01' 
              onChange={handleVolumeChange} 
              defaultValue='1' 
            />
          </label></div>

      <div className='controlrow'>
      
          <button onClick={() => handleClick(currentSong)}>
            <img src={isPlaying ? pause : play} alt='' />
          </button>

          <div className="seek-bar">
            <input 
              type="range" 
              min="0" 
              max={audioRef.current ? audioRef.current.duration : 0} 
              step="0.1" 
              value={currentTime} 
              onChange={handleSeekChange} 
            />
            <span>{formatTime(currentTime)} / {formatTime(audioRef.current ? audioRef.current.duration : 0)}</span>
          </div>

      

          <button onClick={handleStop}>
            <img src={stopIcon} alt='Stop' />
          </button>

          
          </div>
          </div>
        )}
      </div>


        <audio ref={audioRef} />
      </div>
    </div>
  );
}
