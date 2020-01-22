import React from 'react';
import '../../../styles/scss/NowPlaying.css'

const NowPlaying = (props) => {


    return (
        <>
            {props.firstSong ?
                <>
                    <div className="now-playing">
                        <h2 className='now-playing-intro'>Now playing</h2>
                        <p className="now-playing-name">{`${props.firstSong.author} - ${props.firstSong.name}`}</p>
                    </div>
                </>
                : null}
        </>
    );
}

export default NowPlaying;