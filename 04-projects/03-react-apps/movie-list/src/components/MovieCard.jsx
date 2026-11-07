// import interstellarImg from '../assets/Interstellar.png';

function MovieCard({ movie }) {
    return (
        <div className="movie-card" style={{ border: '2px solid black' }}>
            <img src={movie.posterUrl} alt={movie.title} className="movie-image" style={{ height: '300px', objectFit: 'cover' }} />
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
            </div>
            <i className="fa-regular fa-heart"></i>
        </div>
    );
}

export default MovieCard;
