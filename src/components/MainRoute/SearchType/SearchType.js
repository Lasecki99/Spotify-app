import React from 'react';
import SearchItem from './SearchItem.js/SearchItem';
import uuid from 'uuid/v1';

const SearchType = (props) => {

    const { item } = props;
    return (
        <>
            {item.data.items.length ? (
                <div className={item.type}>
                    <h2>{item.type}</h2>
                    {item.data.items.map(data => <SearchItem key={uuid()} item={data} />)}
                </div>
            ) : null}
        </>
    );
}
export default SearchType;