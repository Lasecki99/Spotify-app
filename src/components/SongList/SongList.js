import React from 'react';
import { v1 } from 'uuid';
import NowPlaying from '../MusicBar/NowPlaying/NowPlaying';
import { useSelector, useDispatch } from 'react-redux';
import { SET_SONG_TO_PLAY } from '../../store/actions/actionTypes';
import styled from 'styled-components';

const SongListView = styled.div`

  h2 {
    color: #eee;
    padding-top: 8px;
    padding-bottom: 4px;
  }

  p {
    color: #999;
    padding-top: 5px;
    padding-bottom: 5px;
    text-align: left;
    cursor: pointer;
  }

  p.selected {
    color: #222;
    background-color: #ddd;
    font-weight: bold;
  }

  @media (max-width: 1024px) {
    h2 {
      display: none;
    }

    p {
      display: none;
    }

    p.selected {
      display: none;
    }
  }
`;

const SongList = () => {

  const dispatch = useDispatch();
  const musicArr = useSelector(state => state.albumReducer.musicArr);
  const songToPlay = useSelector(state => state.playbackReducer.songToPlay);

  return (
    <SongListView>
      <NowPlaying />
      {musicArr.length ? <h2>List of songs</h2> : null}
      {musicArr.length ? musicArr.map(item => {
        const { author, name } = item;
        return (
          <p key={v1()} onClick={() => dispatch({ type: SET_SONG_TO_PLAY, song: item })} className={songToPlay === item ? 'selected' : ''}>{`${author} - ${name}`}</p>
        )
      }) : null}
    </SongListView>
  );
}

export default SongList;