import React, { useContext } from 'react';
import '../styles/PlaybackView.css'
import { PlaybackContext } from '../contexts/PlaybackContextProvider';
import { AlbumContext } from '../contexts/AlbumContextProvider';

const PlaybackView = () => {
    const { songToPlay, setSongToPlay, autoplayNext } = useContext(PlaybackContext);
    const { musicArr } = useContext(AlbumContext);

    const playOrPause = songToPlay => {
        if (songToPlay) {
            const { audio } = songToPlay;
            if (!audio.paused) {
                document.getElementById('play').classList.toggle('toggle');
                document.getElementById('stop').classList.toggle('toggle');
                audio.pause();
            } else if (audio.paused) {
                document.getElementById('play').classList.toggle('toggle');
                document.getElementById('stop').classList.toggle('toggle');
                if (!audio.added) {
                    audio.addEventListener('ended', () => autoplayNext(songToPlay));
                    audio.added = true;
                }
                audio.play();
            }
        }
    }

    const nextOrPreviousSong = e => {
        if (songToPlay) {
            const target = e.target.classList;
            let index = musicArr.indexOf(songToPlay);
            if (target.contains('fa-step-forward')) {
                index += 1;
                if (index === musicArr.length) index = 0;
                setSongToPlay(musicArr[index]);
            } else if (target.contains('fa-step-backward')) {
                index -= 1;
                if (index < 0) index = musicArr.length - 1;
                setSongToPlay(musicArr[index]);
            }
        }
    }

    return (
        <div className="playback">
            <div className={songToPlay ? 'playback-buttons' : 'playback-buttons active'}>
                <i onClick={e => nextOrPreviousSong(e)} className="fas fa-step-backward"></i>
                <i id='play' onClick={() => playOrPause(songToPlay)} className="far fa-play-circle"></i>
                <i id='stop' onClick={() => playOrPause(songToPlay)} className="far fa-pause-circle toggle"></i>
                <i onClick={e => nextOrPreviousSong(e)} className="fas fa-step-forward"></i>
                <i className="fas fa-plus"></i>
            </div>
            <div className="playback-text">
                {songToPlay ?
                    <>
                        <p className="current-title">{songToPlay.name}</p>
                        <p className="current-author">{songToPlay.author}</p>
                    </> : null}
            </div>
        </div>
    );
}
export default PlaybackView;