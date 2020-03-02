import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux'

const PlaylistView = styled.div`
  height: 100%;
  background-color: #121212;
  overflow: scroll;
  padding-left: 20px;
  margin-left: 230px;
  color:white;

  @media (max-width: 1024px) {
    margin-left: 60px;
  }
`;

const Playlist = () => {

  const playlist = useSelector(state => state.playlistReducer.playlist);

  useEffect(() => {
    console.log(playlist);
  }, [playlist])


  return (
    <PlaylistView>
      {playlist.length ? <div></div> : <h2>Your playlist is empty</h2>}
    </PlaylistView>
  );
}

export default Playlist;