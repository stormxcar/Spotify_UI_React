import React, { useContext } from 'react';
import { songs } from './Context';

const DetailSong = () => {
    const {song} = useContext(songs);

    if(!song){
        return <div>Select a song to display !</div>;
    }

    // console.log(song);
    return (
        <div className="detail_left">
                <h2>New Playing</h2>
                <h4 className='song_name'>{song.name}</h4>
                <div className="image_theme">
                {song && song.links && song.links.images && song.links.images[0] && (
                    <img src={song.links.images[0].url} alt="" />
                )}
                </div>
                <div className="detail_song">
                {song.links && song.links.images && song.links.images[1].url && (
                    <img src={song.links.images[1].url} alt="" />
                )}
                    <h2 className='song_author'>{song.author}</h2>
                </div>
        </div>
    );
};

export default DetailSong;