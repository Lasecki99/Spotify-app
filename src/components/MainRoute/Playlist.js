import React from 'react';
import styled from 'styled-components';

const PlaylistView = styled.div`
  height: 100%;
  background-color: #121212;
  overflow: scroll;
  padding-left: 20px;

`;

const Playlist = () => {
  return (
    <PlaylistView>
      Playlist
    </PlaylistView>
  );
}

export default Playlist;