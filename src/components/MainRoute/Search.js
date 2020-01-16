import React, { useContext } from 'react';
import '../../styles/Search.css';
import { SearchContext } from '../../contexts/SearchContextProvider';
import SearchType from './SearchType/SearchType';

const Search = () => {
    const { setInputValue, inputValue, searchList } = useContext(SearchContext);

    return (
        <div className="search">
            <input value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Start typing..." type="text" />
            <div className="search-main-content">
                {searchList ? searchList.map(item => (
                    <SearchType key={item.type} item={item} />
                )) : null}
            </div>
        </div>
    );
}
export default Search;