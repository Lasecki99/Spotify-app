import React, { useState } from 'react';
import '../../styles/Search.css';

const Search = () => {

    const [name, setName] = useState('');
    return (
        <div className="search">
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Start typing..." type="text" />
            <div className="search-main-content">
                tutaj content
            </div>
        </div>
    );
}

export default Search;