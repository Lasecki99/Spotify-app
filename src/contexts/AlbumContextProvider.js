import React, { createContext, useState, useEffect } from 'react';
import { spotifyWebApi } from '../spotifyWebApi/spotifyWebApi';
export const AlbumContext = createContext();
const message = "Couldn't load tracks. Please try again later.";

const AlbumContextProvider = (props) => {

    const [clickedSong, setClickedSong] = useState();
    const [musicArr, setMusicArr] = useState('123');

    useEffect(() => {
        if (clickedSong) {
            const { type, id } = clickedSong;
            switch (type) {
                case 'album':
                    spotifyWebApi.getAlbumTracks(id)
                        .then(res => {
                            let arr = res.items.filter(item => item.preview_url !== null);
                            setMusicArr(arr);
                        })
                        .catch(() => alert(message));
                    break;
                case 'artist':
                    spotifyWebApi.getArtistTopTracks(id, "PL")
                        .then(res => {
                            let arr = res.tracks.filter(item => item.preview_url !== null);
                            setMusicArr(arr);
                        })
                        .catch(() => alert(message));
                    break;
                case 'playlist':
                    spotifyWebApi.getPlaylistTracks(id, { limit: 15 })
                        .then(res => {
                            let arr = res.items.filter(item => item.preview_url !== null);
                            setMusicArr(arr);
                        })
                        .catch(() => alert(message))
                    break;
                case 'track':
                    spotifyWebApi.getTrack(id)
                        .then(res => {
                            if (res.preview_url) {
                                let arr = [{ track: res }]
                                setMusicArr(arr);
                            }
                        })
                        .catch(() => alert(message))
                    break;
                default:
                    break;
            }
        }
    }, [clickedSong])

    return (
        <AlbumContext.Provider value={{ setClickedSong, musicArr }}>
            {props.children}
        </AlbumContext.Provider>
    );
}
export default AlbumContextProvider;