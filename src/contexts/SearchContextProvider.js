import React, { createContext, useState, useEffect } from 'react';
import { spotifyWebApi } from '../spotifyWebApi/spotifyWebApi';

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
    const [songName, setSongName] = useState('');
    useEffect(() => {
        if (songName) {
            spotifyWebApi.searchTracks(songName)
                .then(res => console.log(res))
        }
    }, [songName])

    return (
        <SearchContext.Provider value={{ setSongName, songName }}>
            {props.children}
        </SearchContext.Provider>
    );
}
export default SearchContextProvider;