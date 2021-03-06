import React from 'react';
import jpg from '../../../../assets/music.jpg'
import { useDispatch } from 'react-redux';
import { checkAndReturnSongs } from '../../../../store/reducers/Album/albumReducerCreator';

type RootState = {
  item: {
    images: [{ url: string }],
    name: string
  }
}

const SearchItem = ({ item }: RootState) => {

  const dispatch = useDispatch();

  return (
    <>
      <div className="song">
        <img
          onClick={() => dispatch(checkAndReturnSongs(item))}
          src={item.images && item.images.length ? item.images[0].url : jpg}
          alt="song" />
        <p
          onClick={() => dispatch(checkAndReturnSongs(item))}
          className='song-name'>{item.name}</p>
      </div>
    </>
  );
}

export default SearchItem;