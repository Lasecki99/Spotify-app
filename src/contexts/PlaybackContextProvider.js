import React, { createContext, useState, useEffect } from 'react';
import { connect } from 'react-redux';

export const PlaybackContext = createContext();

const PlaybackContextProvider = ({ children, musicArr }) => {
    const [songToPlay, setSongToPlay] = useState();
    const [songBefore, setSongBefore] = useState();

    const autoplayNext = song => {
        if (song) {
            let index = musicArr.indexOf(song) + 1;
            if (index === musicArr.length) index = 0;
            setSongToPlay(musicArr[index]);
        }
    }

    useEffect(() => {
        if (songToPlay) {
            setSongBefore(songToPlay);
            if (songBefore) {
                const { audio } = songBefore;
                audio.removeEventListener('ended', autoplayNext);
                audio.added = false;
                audio.pause();
                audio.currentTime = 0;
            }
            if (document.getElementById('play').classList.contains('toggle')) {
                songToPlay.audio.addEventListener('ended', () => autoplayNext(songToPlay));
                songToPlay.audio.play();
            }
        }
    }, [songToPlay])

    return (
        <PlaybackContext.Provider value={{ setSongToPlay, songToPlay, songBefore, autoplayNext }}>
            {children}
        </PlaybackContext.Provider>
    );
}

const mapStateToProps = state => ({
    musicArr: state.albumReducer.musicArr
})

export default connect(mapStateToProps)(PlaybackContextProvider);

