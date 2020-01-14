import React, { createContext, useState, useEffect } from 'react';
import { spotifyWebApi } from '../spotifyWebApi/spotifyWebApi';

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
    const [inputValue, setInputValue] = useState('');
    const [searchList, setSearchList] = useState();

    useEffect(() => {
        if (inputValue) {
            spotifyWebApi.search(inputValue, ["album", "artist", "playlist", "track"], { limit: 10 })
                .then(res => {
                    const arr = [
                        { type: 'albums', data: res.albums },
                        { type: 'artists', data: res.artists },
                        { type: 'playlists', data: res.playlists },
                        { type: 'tracks', data: res.tracks }];
                    setSearchList(arr);
                })
        } else setSearchList();
    }, [inputValue])

    return (
        <SearchContext.Provider value={{ setInputValue, inputValue, searchList }}>
            {props.children}
        </SearchContext.Provider>
    );
}
export default SearchContextProvider;