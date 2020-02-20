import React, { useEffect, useState } from 'react';
import '../../styles/Search.css';
import SearchType from './SearchType/SearchType';
import { connect } from 'react-redux';
import { getSearchList } from '../../store/reducers/Search/searchReducerCreators';
import { RESET_LIST } from '../../store/actions/actionTypes';

const Search = ({ searchList, getSearchListFn, resetSearchList }) => {

    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (inputValue) getSearchListFn(inputValue);
        else if (searchList.length) resetSearchList();
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

const mapStateToProps = state => ({
    searchList: state.searchReducer.searchList
})

const mapDispatchToProps = dispatch => ({
    getSearchListFn: inputValue => dispatch(getSearchList(inputValue)),
    resetSearchList: () => dispatch({ type: RESET_LIST })
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);