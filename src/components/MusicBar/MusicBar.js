import React from 'react';
import * as S from './MusicBar.styled';
import { NavLink, Route, BrowserRouter } from 'react-router-dom';
import Search from '../MainRoute/Search/Search';
import NewReleases from '../MainRoute/NewReleases/NewReleases';
// import Playlist from '../MainRoute/Playlist';
import SongList from '../SongList/SongList';
import PlaybackView from '../PlaybackView/PlaybackView';

const MusicBar = () => {
  return (
    <>
      <BrowserRouter>
        <S.Music>
          <ul>
            <NavLink exact to="/">
              <i className="fas fa-search"></i>
              <p>Search</p>
            </NavLink>
            <NavLink to="/new-releases">
              <i className="fas fa-compact-disc"></i>
              <p>New releases</p>
            </NavLink>
            {/* <NavLink to="/playlist"><i className="fas fa-sliders-h"></i><p>Playlist</p></NavLink> */}
            <SongList />
          </ul>
        </S.Music>
        <Route path="/new-releases" component={NewReleases} />
        {/* <Route path="/playlist" component={Playlist} /> */}
        <Route path="/" component={Search} />
        <PlaybackView />
      </BrowserRouter>
    </>
  );
};
export default MusicBar;
