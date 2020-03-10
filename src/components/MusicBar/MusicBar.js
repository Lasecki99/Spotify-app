import React from 'react';
import { NavLink, Route, BrowserRouter } from 'react-router-dom';
import Search from '../MainRoute/Search';
import NewReleases from '../MainRoute/NewReleases';
import Playlist from '../MainRoute/Playlist';
import SongList from '../SongList/SongList';
import PlaybackView from '../PlaybackView';

import styled from 'styled-components';

const MusicAside = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 90px;
  width: 230px;
  background-color: black;
  overflow: scroll;

  > ul {
    display: flex;
    flex-direction: column;
    margin: 30px 0 0 30px;

    > a {
      margin: 4px 0;
      z-index: 1000000;
      color: ${props => props.theme.dustyGray};

      &:hover i,
      &:hover p,
      &.active i,
      &.active p {
        color: ${props => props.theme.alto}
      }

      > p {
        z-index: -1;
        display: inline-block;
        margin-left: 10px;
        font-size: 18px;
        vertical-align: -1px;
      }

      > i {
        font-size: 19px;
        z-index: -1;
      }
    }
  }

  @media (max-width: 1024px) {
    width: 60px;

    ul {
      margin: 15px 0 0 15px;

      a {

        p {
          display: none;
        }

        i {
          font-size: 26px;
          margin: 10px 0;
        }
      }
    }
  }
`;

const MusicBar = () => {

  return (
    <>
      <BrowserRouter>
        <MusicAside>
          <ul>
            <NavLink exact to="/"><i className="fas fa-search"></i><p>Search</p></NavLink>
            <NavLink to="/new-releases"><i className="fas fa-compact-disc"></i><p>New releases</p></NavLink>
            {/* <NavLink to="/playlist"><i className="fas fa-sliders-h"></i><p>Playlist</p></NavLink> */}
            <SongList />
          </ul>
        </MusicAside>
        <Route path="/new-releases" component={NewReleases} />
        {/* <Route path="/playlist" component={Playlist} /> */}
        <Route path="/" component={Search} />
        <PlaybackView />
      </BrowserRouter>
    </>
  );
}
export default MusicBar;