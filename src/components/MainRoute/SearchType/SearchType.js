import React from 'react';
import * as S from './SearchType.styled';
import SearchItem from './SearchItem.js/SearchItem';
import { v1 } from 'uuid';

const SearchType = ({ item }) => {
  return (
    <>
      {item.data.items.length ? (
        <S.SearchType className={item.type}>
          <h2>{item.type}</h2>
          {item.data.items.map(data => (
            <SearchItem key={v1()} item={data} />
          ))}
        </S.SearchType>
      ) : item.type !== 'New Releases' ? (
        <h2 style={{ margin: '25px 0 25px 20px', color: '#ddd' }}>
          No {item.type} found
        </h2>
      ) : null}
    </>
  );
};
export default SearchType;
