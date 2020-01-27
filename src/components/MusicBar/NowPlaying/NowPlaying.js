import React, { useContext } from 'react';
import '../../../styles/scss/NowPlaying.css'
import { PlaybackContext } from '../../../contexts/PlaybackContextProvider';

const NowPlaying = (props) => {

    const { songToPlay } = useContext(PlaybackContext);

    return (
        <>
            {songToPlay ?
                <>
                    <div className="now-playing">
                        <h2 className='now-playing-intro'>Now playing</h2>
                        <p className="song-list-name clickable">{`${songToPlay.author} - ${songToPlay.name}`}</p>
                    </div>
                </>
                : null}
        </>
    );
}

export default NowPlaying;