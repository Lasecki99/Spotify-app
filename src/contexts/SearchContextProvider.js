import React, { createContext, useState, useEffect } from 'react';
import { spotifyWebApi } from '../spotifyWebApi/spotifyWebApi';

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
    const [songName, setSongName] = useState('');
    const [songList, setSongList] = useState([]);

    useEffect(() => {
        if (songName) {
            spotifyWebApi.searchTracks(songName)
                .then(res => setSongList(res))
        }
    }, [songName])

    return (
        <SearchContext.Provider value={{ setSongName, songName, songList }}>
            {props.children}
        </SearchContext.Provider>
    );
}
export default SearchContextProvider;