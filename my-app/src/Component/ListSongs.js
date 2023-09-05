import React, {useContext, useEffect, useState} from 'react';
import { BsDownload } from 'react-icons/bs';
import { songs } from './Context';

const ListSongs = () => {
    const {dataSongs , HandleSetSong, song} = useContext(songs);
    // console.log(dataSongs);
    const [idSong , setIdSong] = useState(0)
    const HandlePlaySong = (idSong) => {
        setIdSong(idSong);
        HandleSetSong(idSong)
    }
    // useEffect sẽ cập nhật lại song_id của nó
    useEffect(() => {
        setIdSong(song.id)
    }, [song])

    return (
        <div className='list_right'>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th><BsDownload></BsDownload></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataSongs.map((song, index) => (
                        <tr 
                            key={index} 
                            onClick={() => HandlePlaySong(song.id)}
                            className={`${idSong === song.id && 'change'}`}
                            >
                            <td>{index + 1}</td>
                            <td>{song.name}</td>
                            <td>{song.author}</td>
                            <td ><a href={song.url} >
                                <BsDownload></BsDownload>
                                </a>
                            </td>
                        </tr>
                        ))
                    }  
                </tbody>
            </table>
        </div>
    );
};

export default ListSongs;