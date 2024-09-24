import React, {useState, useEffect} from 'react';
import '../styles.css';

// The MovieCard component is created to display the movie details
// This is a state, in this case a less functional component
export default function MovieCard({movie}){
    return (
        // The movie details from JSON files are displayed and returned within a div
      <div key={movie.id} className="movie-card">
        <img src={`images/${movie.image}`} alt={movie.title} />
        <div className="movie-card-info">
          <h3 className="movie-card-title">{movie.title}</h3>
          <p className="movie-card-genre">{movie.genre}</p>
          <p className="movie-card-rating">{movie.rating}</p>
        </div>
      </div>
    );
}