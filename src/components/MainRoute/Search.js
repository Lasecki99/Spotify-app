import React, { useState, useContext } from 'react';
import '../../styles/Search.css';
import { SearchContext } from '../../contexts/SearchContextProvider';

const Search = () => {

    const { setSongName, songName } = useContext(SearchContext);

    return (
        <div className="search">
            <input value={songName} onChange={e => setSongName(e.target.value)} placeholder="Start typing..." type="text" />
            <div className="search-main-content">
            </div>
        </div>
    );
}
export default Search;