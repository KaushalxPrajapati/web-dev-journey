/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';

const MovieContext = createContext(null);

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        const storedFavorites = localStorage.getItem('favorites');
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    });

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (movie) => {
        setFavorites((currentFavorites) => {
            const isFav = currentFavorites.some((favorite) => favorite.id === movie.id);

            if (isFav) {
                return currentFavorites.filter((favorite) => favorite.id !== movie.id);
            }

            return [...currentFavorites, movie];
        });
    };

    const isFavorite = (movieId) => {
        return favorites.some((favorite) => favorite.id === movieId);
    };

    const value = {
        favorites,
        toggleFavorite,
        isFavorite,
    };

    return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};
