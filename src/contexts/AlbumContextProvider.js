import React, { createContext, useState, useEffect } from 'react';
import { spotifyWebApi } from '../spotifyWebApi/spotifyWebApi';

export const AlbumContext = createContext();

const AlbumContextProvider = (props) => {

    const [clickedSong, setClickedSong] = useState();

    useEffect(() => {
        if (clickedSong) {
            console.log(clickedSong.id);
            spotifyWebApi.getAlbumTracks(clickedSong.id)
                .then(res => {
                    console.log(res);
                    let tracks = res.items.filter(item => item.preview_url !== null);
                    console.log(tracks);
                })
        }
    }, [clickedSong])

    return (
        <AlbumContext.Provider value={{ setClickedSong }}>
            {props.children}
        </AlbumContext.Provider>
    );
}

export default AlbumContextProvider;