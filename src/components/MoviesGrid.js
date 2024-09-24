import React, {useState, useEffect} from 'react';
import '../styles.css';
import MovieCard from './MovieCard';

export default function MoviesGrid(){

    // State syntax: const [stateName, setStateName] = useState(initialStateValue);

    // State to store the movies
    const [movies, setMovies] = useState([]);

    // State to store the search term
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("movies.JSON")
        .then(response => response.json())
        .then(data => setMovies(data))
    }, []);

    // The handleSearchChange function is created to handle the search input change
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Takes the movies array and filters it based on the search term
    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
      <div>
        <input 
            className="search-input"
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={handleSearchChange}
        />
        <div className="movies-grid">
          {
            // Loop through the movies array and create a div for each movie
            // The key attribute is required when creating a list of elements

            filteredMovies.map((movie) => (
              // The MovieCard Component is used to display the movie details
              <MovieCard movie={movie} key={movie.id}></MovieCard>
            ))
          }
        </div>
      </div>
    );
}