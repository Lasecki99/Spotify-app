import React from 'react';
import '../styles/PlaybackView.css'

const PlaybackView = () => {
    return (
        <div className="playback">
            <div className="playback-buttons">
                <i className="fas fa-step-backward"></i>
                <i className="far fa-play-circle"></i>
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