import React, { useContext } from 'react';
import '../styles/PlaybackView.css'
import { PlaybackContext } from '../contexts/PlaybackContextProvider';

const PlaybackView = () => {

    const { songToPlay } = useContext(PlaybackContext);

    const playOrPause = (songToPlay) => {
        if (songToPlay) {
            const { audio } = songToPlay;
            if (!audio.paused) audio.pause();
            else if (audio.paused) audio.play();
        }
    }

    return (
        <div className="playback">
            <div className="playback-buttons">
                <i className="fas fa-step-backward"></i>
                <i onClick={() => playOrPause(songToPlay)} className="far fa-play-circle"></i>
                <i className="fas fa-step-forward"></i>
                <i className="fas fa-plus"></i>
            </div>
            <div className="playback-text">
                <p className="current-title">Nazwa piosenki może być długo</p>
                <p className="current-author">Autor tak samo</p>
            </div>
        </div>
    );
}
export default PlaybackView;