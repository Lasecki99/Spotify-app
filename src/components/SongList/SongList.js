import React from 'react';
import {v1} from 'uuid';
import NowPlaying from '../MusicBar/NowPlaying/NowPlaying';
import '../../styles/scss/SongList.css';
import { useSelector, useDispatch } from 'react-redux';

const SongList = () => {

    const dispatch = useDispatch();
    const musicArr = useSelector(state => state.albumReducer.musicArr);
    const songToPlay = useSelector(state => state.playbackReducer.songToPlay);

    return (
        <>
            <NowPlaying />
            {musicArr.length ? <h2 className="list-of-songs">List of songs</h2> : null}
            {musicArr.length ? musicArr.map(item => {
                const { author, name } = item;
                return (
                    <p key={v1()} onClick={() => dispatch({ type: 'SET_SONG_TO_PLAY', song: item })} className={songToPlay === item ? 'song-list-name clickable selected' : 'song-list-name clickable'}>{`${author} - ${name}`}</p>
                )
            }) : null}
        </>
    );
}

export default SongList;