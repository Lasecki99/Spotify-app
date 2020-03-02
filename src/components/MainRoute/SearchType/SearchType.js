import React from 'react';
import SearchItem from './SearchItem.js/SearchItem';
import { v1 } from 'uuid';

const SearchType = ({ item }) => {
  return (
    <>
      {item.data.items.length ? (
        <div className={item.type}>
          <h2>{item.type}</h2>
          {item.data.items.map(data => <SearchItem key={v1()} item={data} />)}
        </div>
      ) : <h2 style={{ margin: '25px 0 25px 20px', color: '#ddd' }}>No {item.type} found</h2>}
    </>
  );
}
export default SearchType;