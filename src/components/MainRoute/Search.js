import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchType from './SearchType/SearchType';
import { useSelector, useDispatch } from 'react-redux';
import { getSearchList } from '../../store/reducers/Search/searchReducerCreators';
import { RESET_LIST } from '../../store/actions/actionTypes';
import Spinner from '../Spinner/Spinner';

const SearchView = styled.div`
  width: calc(100% - 230px);
  margin-left: 230px;
  height: 100%;

  > input {
    width: 100%;
    background-color: #282828;
    color: #eee;
    font-weight: 600;
    font-size: 30px;
    padding: 15px 40px;
    outline: none;
    border: none;
  }

  > div.search-main-content {
    height: calc(100% - 67px);
    background-color: #121212;
    overflow: scroll;

      div {
      display: inline-block;

        > h2 {
        color: #ddd;
        margin: 25px 0 25px 20px;
        }

        > div.song {
          width: 210px;
          height: 258px;

        > img {
          display: block;
          width: 170px;
          height: 170px;
          cursor: pointer;
          margin: 0 auto;
          border-radius: 5px;
        }

        > p {
          cursor: pointer;
          color: #ddd;
          text-align: center;
          margin-top: 10px;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
    margin-left: 60px;

    input {
      font-size: 18px;
      padding: 10px 10px;
    }
  }
`;

const Search = () => {

  const searchList = useSelector(state => state.searchReducer.searchList);
  const isLoading = useSelector(state => state.searchReducer.isLoading);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (inputValue) {
      dispatch({ type: 'SET_LOADER' })
      dispatch(getSearchList(inputValue));
    }
    else if (searchList.length && !inputValue) dispatch({type: RESET_LIST});
  }, [inputValue])

  return (
    <>
      <SearchView >
        <input value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder="Start typing..."
          type="text" />
        {isLoading ? <Spinner /> : <div className="search-main-content">
          {searchList ? searchList.map(item => (<SearchType key={item.type} item={item} />
          )) : null}
        </div>}
      </SearchView>
    </>
  );
}

export default Search;