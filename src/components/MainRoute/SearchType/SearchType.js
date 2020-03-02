import React from 'react';
import SearchItem from './SearchItem.js/SearchItem';
import { v1 } from 'uuid';

const SearchType = (props) => {
  const { item } = props;
  return (
    <>
      {item.data?.items.length ? (
        <div className={item.type}>
          <h2>{item.type}</h2>
          {item.data.items.map(data => <SearchItem key={v1()} item={data} />)}
        </div>
      ) : null}
    </>
  );
}
export default SearchType;