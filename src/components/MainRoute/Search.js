import React, { useEffect, useState } from 'react';
import '../../styles/Search.css';
import SearchType from './SearchType/SearchType';
import { useSelector, useDispatch } from 'react-redux';
import { getSearchList } from '../../store/reducers/Search/searchReducerCreators';
import { RESET_LIST } from '../../store/actions/actionTypes';

const Search = () => {

    const searchList = useSelector(state => state.searchReducer.searchList);
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (inputValue) dispatch(getSearchList(inputValue));
        else if (searchList.length) dispatch({type: RESET_LIST});
    }, [inputValue])

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