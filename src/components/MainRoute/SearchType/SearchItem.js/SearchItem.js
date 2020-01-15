import React, { useContext } from 'react';
import jpg from '../../../../assets/music.jpg'
import { AlbumContext } from '../../../../contexts/AlbumContextProvider';

const SearchItem = (props) => {

    const { setClickedSong } = useContext(AlbumContext);
    const { item } = props;

    const clickedSong = () => {
        setClickedSong(item);
    }
    return (
        <>
            <div className="song">
                <img onClick={clickedSong} src={item.images && item.images.length ? item.images[0].url : jpg} alt="" />
                <p onClick={clickedSong} className='song-name'>{item.name}</p>
            </div>
        </>
    );
}
export default SearchItem;