import React, { useEffect, useState } from 'react';
import * as S from './Search.styled';
import SearchType from '../SearchType/SearchType';
import { useSelector, useDispatch } from 'react-redux';
import { getSearchList } from '../../../store/reducers/Search/searchReducerCreators';
import { RESET_LIST } from '../../../store/actions/actionTypes';
import Spinner from '../../Spinner/Spinner';

type RootState = {
  searchReducer: {
    searchList: [{ type: string, data: { items: [] }}],
    isLoading: boolean
  }
}

const Search = () => {
  const searchList = useSelector((state: RootState) => state.searchReducer.searchList);
  const isLoading = useSelector((state: RootState) => state.searchReducer.isLoading);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (inputValue) {
      dispatch({ type: 'SET_LOADER' });
      dispatch(getSearchList(inputValue));
    } else if (searchList.length && !inputValue) dispatch({ type: RESET_LIST });
  }, [inputValue]);

  return (
    <>
      <S.Search>
        <input
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder="Start typing..."
          type="text"
        />
        {isLoading ? (
          <Spinner />
        ) : (
            <div className="search-main-content">
              {searchList
                ? searchList.map(item => (
                  <SearchType key={item.type} item={item} />
                ))
                : null}
            </div>
          )}
      </S.Search>
    </>
  );
};

export default Search;
