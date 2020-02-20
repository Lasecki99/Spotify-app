import React, { useContext } from 'react';
import uuid from 'uuid/v1';
import NowPlaying from '../MusicBar/NowPlaying/NowPlaying';
import '../../styles/scss/SongList.css';
import { PlaybackContext } from '../../contexts/PlaybackContextProvider';
import { connect } from 'react-redux';

const SongList = ({ musicArr }) => {

    const { setSongToPlay, songToPlay } = useContext(PlaybackContext);

    return (
        <>
            <NowPlaying />
            {musicArr.length ? <h2 className="list-of-songs">List of songs</h2> : null}
            {musicArr.length ? musicArr.map(item => {
                const { author, name } = item;
                return (
                    <p key={uuid()} onClick={() => setSongToPlay(item)} className={songToPlay === item ? 'song-list-name clickable selected' : 'song-list-name clickable'}>{`${author} - ${name}`}</p>
                )
            }) : null}
        </>
    );
}

const mapStateToProps = state => ({
    musicArr: state.albumReducer.musicArr
})

export default connect(mapStateToProps)(SongList);