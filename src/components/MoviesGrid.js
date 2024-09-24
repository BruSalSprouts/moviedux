import React, {useState, useEffect} from 'react';
import '../styles.css';
import MovieCard from './MovieCard';

export default function MoviesGrid(){

    // State syntax: const [stateName, setStateName] = useState(initialStateValue);

    // State to store the movies
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("movies.JSON")
        .then(response => response.json())
        .then(data => setMovies(data))

    }, []);

    return (
        <div className='movies-grid'>
            {
                // Loop through the movies array and create a div for each movie
                // The key attribute is required when creating a list of elements
            
                movies.map(movie => (
                    // The MovieCard Component is used to display the movie details
                    <MovieCard movie={movie} key={movie.id}></MovieCard>
                ))
            }
        </div>
    );
}