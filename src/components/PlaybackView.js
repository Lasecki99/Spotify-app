import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

const PlaybackStyles = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 90px;
    width: 100vw;
    background-color: #282828;

    > div.playback-buttons {
        display: flex;
        position: absolute;
        top: 33%;
        left: 50%;
        margin: 0 auto;
        transform: translate(-50%, -50%);
        font-size: 30px;

        &.active { top: 50%; }

        > i {
            padding: 0 5px;
            color: #bbb;
            cursor: pointer;

            &.toggle { display: none }
        }
    }

    > div.playback-text {
        margin-top: 53px;

        > p {
            color: ${props => props.theme.alto};
            text-align: center;
        }
    }
`;

const PlaybackView = () => {

    const dispatch = useDispatch();
    const musicArr = useSelector(state => state.albumReducer.musicArr);
    const songToPlay = useSelector(state => state.playbackReducer.songToPlay);
    const songBefore = useSelector(state => state.playbackReducer.songBefore);

    const autoplayNext = song => {
        if (song) {
            let index = musicArr.indexOf(song) + 1;
            if (index === musicArr.length) index = 0;
            dispatch({ type: 'SET_SONG_TO_PLAY', song: musicArr[index] })
        }
    }

    const playOrPause = songToPlay => {
        if (songToPlay) {
            const { audio } = songToPlay;
            if (!audio.paused) {
                document.getElementById('play').classList.toggle('toggle');
                document.getElementById('stop').classList.toggle('toggle');
                audio.pause();
            } else if (audio.paused) {
                document.getElementById('play').classList.toggle('toggle');
                document.getElementById('stop').classList.toggle('toggle');
                if (!audio.added) {
                    audio.addEventListener('ended', () => autoplayNext(songToPlay));
                    audio.added = true;
                }
                audio.play();
            }
        }
    }

    const nextOrPreviousSong = e => {
        if (songToPlay) {
            const target = e.target.classList;
            let index = musicArr.indexOf(songToPlay);
            if (target.contains('fa-step-forward')) {
                index += 1;
                if (index === musicArr.length) index = 0;
                dispatch({ type: 'SET_SONG_TO_PLAY', song: musicArr[index] })
            } else if (target.contains('fa-step-backward')) {
                index -= 1;
                if (index < 0) index = musicArr.length - 1;
                dispatch({ type: 'SET_SONG_TO_PLAY', song: musicArr[index] })
            }
        }
    }

    useEffect(() => {
        if (songToPlay) {
            dispatch({ type: 'SET_SONG_BEFORE', song: songToPlay })
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
        <PlaybackStyles>
            <div className={songToPlay ? 'playback-buttons' : 'playback-buttons active'}>
                <i onClick={e => nextOrPreviousSong(e)} className="fas fa-step-backward"></i>
                <i id='play' onClick={() => playOrPause(songToPlay)} className="far fa-play-circle"></i>
                <i id='stop' onClick={() => playOrPause(songToPlay)} className="far fa-pause-circle toggle"></i>
                <i onClick={e => nextOrPreviousSong(e)} className="fas fa-step-forward"></i>
                <i className="fas fa-plus"></i>
            </div>
            <div className="playback-text">
                {songToPlay ?
                    <>
                        <p className="current-title">{songToPlay.name}</p>
                        <p className="current-author">{songToPlay.author}</p>
                    </> : null}
            </div>
        </PlaybackStyles>
    );
}

export default PlaybackView;