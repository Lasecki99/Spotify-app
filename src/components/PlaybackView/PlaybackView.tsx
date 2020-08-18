import React, { useRef, useEffect } from 'react';
import * as S from './PlaybackView.styled';
import { useSelector, useDispatch } from 'react-redux';
import { SET_SONG_TO_PLAY } from '../../store/actions/actionTypes';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../../styles/scss/PlayerVariables.css';
import YtLink from '../YtLink/YtLink';
import H5AudioPlayer from 'react-h5-audio-player';

type RootState = {
  playbackReducer: {
    songToPlay: {
      audio: { src: string },
      name: string,
      author: string
    }
  },
  albumReducer: {
    musicArr: object[]
  }
}

const PlaybackView = () => {
  const songToPlay = useSelector((state: RootState) => state.playbackReducer.songToPlay);
  const musicArr = useSelector((state: RootState) => state.albumReducer.musicArr);
  const dispatch = useDispatch();
  const player = useRef<H5AudioPlayer>(null);

  const nextSong = () => {
    if (songToPlay) {
      let index = musicArr.indexOf(songToPlay);
      index += 1;
      if (index === musicArr.length) index = 0;
      dispatch({ type: SET_SONG_TO_PLAY, song: musicArr[index] });
    }
  };

  const previousSong = () => {
    if (songToPlay) {
      let index = musicArr.indexOf(songToPlay);
      index -= 1;
      if (index < 0) index = musicArr.length - 1;
      dispatch({ type: SET_SONG_TO_PLAY, song: musicArr[index] });
    }
  };

  useEffect(() => {
    if (songToPlay && player.current) player.current.audio.src = songToPlay.audio.src;
  }, [songToPlay]);

  return (
    <S.Playback>
      {/* <div className="playback-text">
        {songToPlay ?
          <>
            <p className="current-title">{songToPlay.name}</p>
            <p className="current-author">{songToPlay.author}</p>
          </> : null}
      </div> */}
      {songToPlay && (
        <YtLink name={songToPlay.name} author={songToPlay.author} />
      )}
      <AudioPlayer
        className="audio-player"
        ref={player}
        showSkipControls
        onClickNext={nextSong}
        onClickPrevious={previousSong}
      />
    </S.Playback>
  );
};

export default PlaybackView;
