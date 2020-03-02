import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const NowPlayingView = styled.div`
  color: #999;
  padding-top: 10px;

  > h2 {
    color: #eee;
    padding-top: 15px;
    font-size: 22px;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const NowPlaying = () => {

  const songToPlay = useSelector(state => state.playbackReducer.songToPlay)

  return (
    <>
      {songToPlay ?
        <>
          <NowPlayingView>
            <h2>Now playing</h2>
            <p className="song-list-name clickable">{`${songToPlay.author} - ${songToPlay.name}`}</p>
          </NowPlayingView>
        </>
        : null}
    </>
  );
}

export default NowPlaying;