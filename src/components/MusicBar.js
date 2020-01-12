import React from 'react';
import '../styles/MusicBar.css';
import { NavLink, Route, BrowserRouter } from 'react-router-dom';
import Search from './MainRoute/Search';
import NewReleases from './MainRoute/NewReleases';
import Playlist from './MainRoute/Playlist';
import SearchContextProvider from '../contexts/SearchContextProvider';

const MusicBar = () => {

    return (
        <>
            <SearchContextProvider>
                <BrowserRouter>
                    <div className="music-bar">
                        <ul className="flex-list">
                            <NavLink exact to="/" className='flex-item'><i className="fas fa-search"></i><p className="text">Search</p></NavLink>
                            <NavLink to="/new-releases" className='flex-item'><i className="fas fa-compact-disc"></i><p className="text">New releases</p></NavLink>
                            <NavLink to="/playlist" className='flex-item'><i className="fas fa-sliders-h"></i><p className="text">Playlist</p></NavLink>
                        </ul>
                    </div>
                    <Route path="/new-releases" component={NewReleases} />
                    <Route path="/playlist" component={Playlist} />
                    <Route path="/" exact component={Search} />
                </BrowserRouter>
            </SearchContextProvider>
        </>
    );
}
export default MusicBar;