import React from 'react';
import '../styles/MusicBar.css';
import { NavLink, Route, BrowserRouter } from 'react-router-dom';
import Search from './MainRoute/Search';
import NewReleases from './MainRoute/NewReleases';
import Playlist from './MainRoute/Playlist';
import SearchContextProvider from '../contexts/SearchContextProvider';
import SongList from './SongList/SongList';
import AlbumContextProvider from '../contexts/AlbumContextProvider';
import PlaybackView from './PlaybackView';

const MusicBar = () => {

    return (
        <>
            <SearchContextProvider>
                <AlbumContextProvider>
                    <BrowserRouter>
                        <div className="music-bar">
                            <ul className="flex-list">
                                <NavLink exact to="/" className='flex-item'><i className="fas fa-search"></i><p className="text">Search</p></NavLink>
                                <NavLink to="/new-releases" className='flex-item'><i className="fas fa-compact-disc"></i><p className="text">New releases</p></NavLink>
                                <NavLink to="/playlist" className='flex-item'><i className="fas fa-sliders-h"></i><p className="text">Playlist</p></NavLink>
                            </ul>
                            <SongList />
                        </div>

                        <Route path="/new-releases" component={NewReleases} />
                        <Route path="/playlist" component={Playlist} />
                        <Route path="/" exact component={Search} />
                        <PlaybackView />

                    </BrowserRouter>
                </AlbumContextProvider>
            </SearchContextProvider>
        </>
    );
}
export default MusicBar;