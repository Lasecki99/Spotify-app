import React, { useEffect } from 'react';
import * as S from './SongList.styled';
import { v1 } from 'uuid';
import NowPlaying from '../MusicBar/NowPlaying/NowPlaying';
import { useSelector, useDispatch } from 'react-redux';
import { SET_SONG_TO_PLAY } from '../../store/actions/actionTypes';

type RootState = {
  albumReducer: {
    musicArr: [{ author: string, name: string }]
  },
  playbackReducer: {
    songToPlay: {
      author: string,
      name: string
    }
  }
}

const SongList = () => {
  const dispatch = useDispatch();
  const musicArr = useSelector((state: RootState) => state.albumReducer.musicArr);
  const songToPlay = useSelector((state: RootState) => state.playbackReducer.songToPlay);

  useEffect(() => {
    if (musicArr.length) {
      dispatch({ type: SET_SONG_TO_PLAY, song: musicArr[0] });
    }
  }, [musicArr]);

  return (
    <S.SongList>
      <NowPlaying />
      {musicArr.length && <h2>List of songs</h2>}
      {musicArr.length && musicArr.map(item => {
        const { author, name } = item;
        return (
          <p
            key={v1()}
            onClick={() => dispatch({ type: SET_SONG_TO_PLAY, song: item })}
            className={songToPlay === item ? 'selected' : ''}
          >{`${author} - ${name}`}</p>
        );
      })}
    </S.SongList>
  );
};

export default SongList;
