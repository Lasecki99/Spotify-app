import React, { useContext } from 'react';
import { AlbumContext } from '../../contexts/AlbumContextProvider';

const SongList = () => {

    const { musicArr } = useContext(AlbumContext);

    return (
        <div className='song-list'>

        </div>
    );
}

export default SongList;