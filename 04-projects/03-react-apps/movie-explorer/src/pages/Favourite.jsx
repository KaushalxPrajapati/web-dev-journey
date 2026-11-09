import '../css/Favourite.css';
import { useMovieContext } from '../contexts/MovieContext.jsx';
import MovieCard from '../components/MovieCard.jsx';

export default function Favourite() {
    const { favorites } = useMovieContext();

    if (favorites && favorites.length > 0) {
        return (
            <div className="favourites">
                <h2>Your Favorites</h2>
                <div className="movies-grid">
                    {favorites.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="favourites-empty">
            <h2>No Favourite Movie yet</h2>
            <p>Start adding movies to your Favourites!</p>
        </div>
    );
}
