import React, { useContext } from 'react';
import jpg from '../../../../assets/music.jpg'
import { AlbumContext } from '../../../../contexts/AlbumContextProvider';

const SearchItem = props => {

    const { setClickedSong } = useContext(AlbumContext);
    const { item } = props;

    return (
        <>
            <div className="song">
                <img onClick={() => setClickedSong(item)} src={item.images && item.images.length ? item.images[0].url : jpg} alt="" />
                <p onClick={() => setClickedSong(item)} className='song-name'>{item.name}</p>
            </div>
        </>
    );
}
export default SearchItem;