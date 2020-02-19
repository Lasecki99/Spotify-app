import React, { createContext, useState, useEffect } from 'react';
import { spotifyWebApi } from '../spotifyWebApi/spotifyWebApi';

export const NewReleasesContext = createContext();

const NewReleasesContextProvider = props => {

    const [newReleases, setNewReleases] = useState();

    useEffect(() => {
        if (!newReleases && props.isLogged) {
            getNewReleases();
        }
    }, [newReleases])

    const getNewReleases = () => {
        spotifyWebApi.getNewReleases({ limit: 10 })
            .then(res => setNewReleases(res.albums))
            .catch(err => alert(err));
    }

    return (
        <NewReleasesContext.Provider value={{ newReleases }}>
            {props.children}
        </NewReleasesContext.Provider>
    );
}

export default NewReleasesContextProvider;