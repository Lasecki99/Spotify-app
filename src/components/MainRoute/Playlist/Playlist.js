import React from 'react';
import * as S from './Playlist.styled';
import { useSelector } from 'react-redux';

const Playlist = () => {
  const playlist = useSelector(state => state.playlistReducer.playlist);

  // useEffect(() => {
  //   console.log(playlist);
  // }, [playlist])

  return (
    <S.Playlist>
      {playlist.length ? <div></div> : <h2>Your playlist is empty</h2>}
    </S.Playlist>
  );
};

export default Playlist;
