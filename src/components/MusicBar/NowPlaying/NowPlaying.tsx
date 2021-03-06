import React from 'react';
import * as S from './NowPlaying.styled';
import { useSelector } from 'react-redux';

type RootState = {
  playbackReducer: {
    songToPlay: {
      author: string,
      name: string
    }
  }
}

const NowPlaying = () => {
  const songToPlay = useSelector((state: RootState) => state.playbackReducer.songToPlay);

  return (
    <>
      {songToPlay && (
        <>
          <S.NowPlaying>
            <h2>Now playing</h2>
            <p className="song-list-name clickable">{`${songToPlay.author} - ${songToPlay.name}`}</p>
          </S.NowPlaying>
        </>
      )}
    </>
  );
};

export default NowPlaying;
