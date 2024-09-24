import React, {useState, useEffect} from 'react';
import '../styles.css';

export default function MoviesGrid(){

    // State syntax: const [stateName, setStateName] = useState(initialStateValue);

    // State to store the movies
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const m = ["a", "b" , "c", "d"];	

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
                    // The html for each movie card
                    <div key={movie.id} className='movie-card'>
                        <img src={`images/${movie.image}`} alt={movie.title}/>
                        <div className='movie-card-info'>
                            <h3 className='movie-card-title'>{movie.title}</h3>
                            <p className='movie-card-genre'>{movie.genre}</p>
                            <p className='movie-card-rating'>{movie.rating}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}