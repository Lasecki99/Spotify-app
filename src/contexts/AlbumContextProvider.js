import React, { createContext, useState, useEffect } from 'react';
import { spotifyWebApi } from '../spotifyWebApi/spotifyWebApi';
export const AlbumContext = createContext();
const message = "Couldn't load tracks. Please try again later.";

const AlbumContextProvider = (props) => {

    const [clickedSong, setClickedSong] = useState();
    const [musicArr, setMusicArr] = useState();

    const getTrack = track => ({
        author: track.artists[0].name,
        name: track.name,
        audio: new Audio(track.preview_url)
    });

    useEffect(() => {
        if (clickedSong) {
            const { type, id } = clickedSong;
            switch (type) {
                case 'album':
                    spotifyWebApi.getAlbumTracks(id)
                        .then(res => {
                            let track = res.items.filter(item => item.preview_url !== null);
                            track = track.map(r => getTrack(r));
                            setMusicArr(track);
                        })
                        .catch(() => alert(message));
                    break;
                case 'artist':
                    spotifyWebApi.getArtistTopTracks(id, "PL")
                        .then(res => {
                            let track = res.tracks.filter(item => item.preview_url !== null);
                            track = track.map(r => getTrack(r))
                            setMusicArr(track);
                        })
                        .catch(() => alert(message));
                    break;
                case 'playlist':
                    spotifyWebApi.getPlaylistTracks(id, { limit: 15 })
                        .then(res => {
                            let track = res.items.filter(item => item.track.preview_url !== null);
                            track = track.map(r => getTrack(r));
                            setMusicArr(track);
                        })
                        .catch((err) => alert(err))
                    break;
                case 'track':
                    spotifyWebApi.getTrack(id)
                        .then(res => {
                            let track = {};
                            if (res.preview_url) track = [getTrack(res)];
                            setMusicArr(track);
                        })
                        .catch(() => alert(message))
                    break;
                default:
                    break;
            }
        }
    }, [clickedSong])

    return (
        <AlbumContext.Provider value={{ setClickedSong, musicArr, clickedSong }}>
            {props.children}
        </AlbumContext.Provider>
    );
}
export default AlbumContextProvider;