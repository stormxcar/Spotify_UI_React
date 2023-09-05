import React, { useContext, useEffect } from 'react';
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import { songs } from './Context';

const Playing = () => {
    const {song , HandleSetSong} = useContext(songs)
    const HandleClickNext = () => {
        HandleSetSong(song.id + 1)
    }
    const HandleClickPrev = () => {
        HandleSetSong(song.id - 1)
    }
    useEffect(() => {
        const audioPlayer = document.querySelector('audio');
        audioPlayer.addEventListener('ended', HandleClickNext);
        return () => {
          audioPlayer.removeEventListener('ended', HandleClickNext); // Loại bỏ sự kiện khi component bị unmount
        };
      }, [song]);
      
    return (
        <div className='play_song'>
            <AudioPlayer 
            src={song.url}
            layout="stacked-reverse"
            showSkipControls={true} 
            showJumpControls={false} 
            onClickNext={HandleClickNext}
            onClickPrevious={HandleClickPrev}
            />
        </div>
    );
};

export default Playing;