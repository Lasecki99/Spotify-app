import React from 'react';
import jpg from '../../../../assets/music.jpg'

const SearchItem = (props) => {

    const { item } = props;
    return (
        <>
            <div className="song">
                <img src={item.images && item.images.length ? item.images[0].url : jpg} alt="" />
                <p className='song-name'>{item.name}</p>
            </div>
        </>
    );
}
export default SearchItem;