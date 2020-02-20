import React from 'react';
import jpg from '../../../../assets/music.jpg'
import { connect } from 'react-redux';
import { checkAndReturnSongs } from '../../../../store/reducers/Album/albumReducerCreator';

const SearchItem = ({ item, setMusicArr }) => {

    return (
        <>
            <div className="song">
                <img onClick={() => setMusicArr(item)} src={item.images && item.images.length ? item.images[0].url : jpg} alt="" />
                <p onClick={() => setMusicArr(item)} className='song-name'>{item.name}</p>
            </div>
        </>
    );
}

const mapDispatchToProps = dispatch => ({
    setClickedSong: clicked => dispatch({ type: 'SET_CLICKED_SONG', clicked }),
    setMusicArr: value => dispatch(checkAndReturnSongs(value)),
})

export default connect(null, mapDispatchToProps)(SearchItem);