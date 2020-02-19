import React, { useContext } from 'react';
import { PlaybackContext } from '../../../contexts/PlaybackContextProvider';
import styled from 'styled-components';

const NowPlayingView = styled.div`
  color: #999;
  padding-left: 12px;
  padding-top: 10px;

  > h2 {
    color: #eee;
    padding-top: 15px;
    padding-left: 10px;
    font-size: 22px;
  }
`;

const NowPlaying = () => {

  const { songToPlay } = useContext(PlaybackContext);

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