import React, { createContext, useState, useEffect, useContext } from 'react';
import { AlbumContext } from './AlbumContextProvider';

export const PlaybackContext = createContext();

const PlaybackContextProvider = (props) => {

    const [songToPlay, setSongToPlay] = useState();

    return (
        <PlaybackContext.Provider value={{ setSongToPlay }}>
            {props.children}
        </PlaybackContext.Provider>
    );
}

export default PlaybackContextProvider;

