import React from 'react';
import '../styles.css';

// The MovieCard component is created to display the movie details
// This is a state, in this case a less functional component
export default function MovieCard({movie}){

    // The handleError function is created to handle image loading errors
    const handleError = (e) => {
        // The default-movie.png image is displayed if the image fails to load
        e.target.src = "images/default.jpg";
    };

    const getRatingClass = (rating) => {
        // The rating is used to determine the color of the rating text
        if(rating >= 8){
            return "rating-good";
        } else if(rating >= 5 && rating < 8){
            return "rating-ok";
        } else {
            return "rating-bad";
        }
    };

    return (
        // The movie details from JSON files are displayed and returned within a div
      <div key={movie.id} className="movie-card">
        <img src={`images/${movie.image}`} alt={movie.title} onError={handleError} />
        <div className="movie-card-info">
          <h3 className="movie-card-title">{movie.title}</h3>
          <p className="movie-card-genre">{movie.genre}</p>
          <p className={`movie-card-rating ${getRatingClass(movie.rating)}`}>{movie.rating}</p>
        </div>
      </div>
    );
}