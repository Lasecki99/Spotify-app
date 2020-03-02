import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { SET_SONG_TO_PLAY } from '../store/actions/actionTypes';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../styles/scss/PlayerVariables.css';

const PlaybackStyles = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 90px;
  width: 100vw;
  background-color: #282828;

  > div.audio-player {
      background-color: #282828;
      width: 500px;
      margin: 0 auto;
      box-shadow: none;
  }

  @media (max-width: 1024px) {
      div.audio-player {
          width: 360px;
      }
  }

    /* > div.playback-text {
        position: absolute;
        display: inline-block;
        bottom: 15px;
        left: 15px;
        > p {
            color: ${props => props.theme.alto};
            text-align: center;
        }
    } */
`;

const PlaybackView = () => {

  const songToPlay = useSelector(state => state.playbackReducer.songToPlay);
  const musicArr = useSelector(state => state.albumReducer.musicArr);
  const dispatch = useDispatch();
  const player = useRef();

  const nextSong = () => {
    if (songToPlay) {
      let index = musicArr.indexOf(songToPlay);
      index += 1;
      if (index === musicArr.length) index = 0;
      dispatch({ type: SET_SONG_TO_PLAY, song: musicArr[index] })
    }
  }

  const previousSong = () => {
    if (songToPlay) {
      let index = musicArr.indexOf(songToPlay);
      index -= 1;
      if (index < 0) index = musicArr.length - 1;
      dispatch({ type: SET_SONG_TO_PLAY, song: musicArr[index] })
    }
  }

  useEffect(() => {
    if (songToPlay) player.current.audio.src = songToPlay.audio.src
  }, [songToPlay])


  return (
    <PlaybackStyles>
      {/* <div className="playback-text">
        {songToPlay ?
          <>
            <p className="current-title">{songToPlay.name}</p>
            <p className="current-author">{songToPlay.author}</p>
          </> : null}
      </div> */}
      <AudioPlayer
        className='audio-player'
        ref={player}
        showSkipControls
        onClickNext={nextSong}
        onClickPrevious={previousSong} />
    </PlaybackStyles>
  );
}

export default PlaybackView;