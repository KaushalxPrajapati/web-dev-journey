import { createContext, useState, useEffect, useContext, Children } from 'react';

const MovieContext = createContext();

export const useMovieContext = () => {
    useContext(MovieContext);
};

export const MovieProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);

    return <MovieContext.Provider>{children}</MovieContext.Provider>;
};
