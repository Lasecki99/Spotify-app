import React, { createContext, useState, useEffect, useContext } from 'react';
import { AlbumContext } from './AlbumContextProvider';

export const PlaybackContext = createContext();

const PlaybackContextProvider = (props) => {

    const [songToPlay, setSongToPlay] = useState();
    const [songBefore, setSongBefore] = useState();

    useEffect(() => {
        if (songToPlay) {
            setSongBefore(songToPlay);
            if (songBefore) {
                songBefore.audio.pause();
            }
            songToPlay.audio.play();
        }
    }, [songToPlay])

    return (
        <PlaybackContext.Provider value={{ setSongToPlay, songToPlay }}>
            {props.children}
        </PlaybackContext.Provider>
    );
}

export default PlaybackContextProvider;

