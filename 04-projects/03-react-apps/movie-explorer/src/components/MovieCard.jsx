import '../css/MovieCard.css';

function MovieCard({ movie }) {
    function onFavoriteClick(e) {
        e.preventDefault();
        alert(`${movie.title} added to favorites!`);
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.posterUrl} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onFavoriteClick}>
                        &hearts;
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
            </div>
        </div>
    );
}

export default MovieCard;
