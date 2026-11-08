import { useState } from 'react';
import MovieCard from '../components/MovieCard';
import '../css/Home.css';

function Home() {
    const [searchQuery, setSearchQuery] = useState('');

    const movies = [
        {
            id: 1,
            title: 'Inception',
            year: 2010,
            rating: 8.8,
            posterUrl: 'https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg',
        },
        {
            id: 2,
            title: 'The Dark Knight',
            year: 2008,
            rating: 9.0,
            posterUrl: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
        },
        {
            id: 3,
            title: 'Interstellar',
            year: 2014,
            rating: 8.7,
            posterUrl: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
        },
        {
            id: 4,
            title: 'The Matrix',
            year: 1999,
            rating: 8.7,
            posterUrl: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
        },
        {
            id: 5,
            title: 'Pulp Fiction',
            year: 1994,
            rating: 8.9,
            posterUrl: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
        },
        {
            id: 6,
            title: 'Spirited Away',
            year: 2001,
            rating: 8.6,
            posterUrl: 'https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg',
        },
        {
            id: 7,
            title: 'The Shawshank Redemption',
            year: 1994,
            rating: 9.3,
            posterUrl: 'https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg',
        },
        {
            id: 8,
            title: 'The Godfather',
            year: 1972,
            rating: 9.2,
            posterUrl: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
        },
        {
            id: 9,
            title: 'Fight Club',
            year: 1999,
            rating: 8.8,
            posterUrl: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
        },
        {
            id: 10,
            title: 'Forrest Gump',
            year: 1994,
            rating: 8.8,
            posterUrl: 'https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg',
        },
        {
            id: 11,
            title: 'Gladiator',
            year: 2000,
            rating: 8.5,
            posterUrl: 'https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg',
        },
        {
            id: 12,
            title: 'Parasite',
            year: 2019,
            rating: 8.5,
            posterUrl: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
        },
        {
            id: 13,
            title: 'Joker',
            year: 2019,
            rating: 8.4,
            posterUrl: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
        },
        {
            id: 14,
            title: 'Avengers: Endgame',
            year: 2019,
            rating: 8.4,
            posterUrl: 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
        },
        {
            id: 15,
            title: 'The Lion King',
            year: 1994,
            rating: 8.5,
            posterUrl: 'https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg',
        },
        {
            id: 16,
            title: 'Whiplash',
            year: 2014,
            rating: 8.5,
            posterUrl: 'https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg',
        },
        {
            id: 17,
            title: 'The Prestige',
            year: 2006,
            rating: 8.5,
            posterUrl: 'https://image.tmdb.org/t/p/w500/5MXyQfz8xUP3dIFPTubhTsbFY6N.jpg',
        },
        {
            id: 18,
            title: 'Titanic',
            year: 1997,
            rating: 7.9,
            posterUrl: 'https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg',
        },
        {
            id: 19,
            title: 'Django Unchained',
            year: 2012,
            rating: 8.5,
            posterUrl: 'https://image.tmdb.org/t/p/w500/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg',
        },
        {
            id: 20,
            title: 'The Wolf of Wall Street',
            year: 2013,
            rating: 8.2,
            posterUrl: 'https://image.tmdb.org/t/p/w500/34m2tygAYBGqA9MXKhRDtzYd4MR.jpg',
        },
    ];

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setSearchQuery('');
    };

    return (
        <div className="home">
            <form onSubmit={handleFormSubmit} className="search-form">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">
                    Search
                </button>
            </form>
            <div className="movies-grid">
                {movies
                    .filter((movie) => movie.title.toLowerCase().includes(searchQuery.toLowerCase().trim()))
                    .map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
            </div>
        </div>
    );
}

export default Home;
