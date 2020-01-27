import React, { useContext } from 'react';
import { AlbumContext } from '../../contexts/AlbumContextProvider';
import uuid from 'uuid/v1';
import NowPlaying from '../MusicBar/NowPlaying/NowPlaying';
import '../../styles/scss/SongList.css';
import { PlaybackContext } from '../../contexts/PlaybackContextProvider';

const SongList = () => {

    const { musicArr } = useContext(AlbumContext);
    const { setSongToPlay, songToPlay } = useContext(PlaybackContext);

    return (
        <>
            <NowPlaying />
            {musicArr ? <h2 className="list-of-songs">List of songs</h2> : null}
            {musicArr ? musicArr.map(item => {
                const { author, name } = item;
                return (
                    <p key={uuid()} onClick={() => setSongToPlay(item)} className={songToPlay === item ? 'song-list-name clickable selected' : 'song-list-name clickable'}>{`${author} - ${name}`}</p>
                )
            }) : null}
        </>
    );
}
export default SongList;