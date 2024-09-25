import React, {useState, useEffect} from 'react';
import '../styles.css';
import MovieCard from './MovieCard';

export default function MoviesGrid(){

    // State syntax: const [stateName, setStateName] = useState(initialStateValue);

    // State to store the movies
    const [movies, setMovies] = useState([]);

    // State to store the search term
    const [searchTerm, setSearchTerm] = useState("");

    // State to store the genre
    const [genre, setGenre] = useState("All Genres");

    // State to store the rating
    const [rating, setRating] = useState("All");

    useEffect(() => {
        fetch("movies.JSON")
        .then(response => response.json())
        .then(data => setMovies(data))
    }, []);

    // The handleSearchChange function is created to handle the search input change
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };
    // Filters the movies based on the rating
    const handleRatingChange = (e) => {
        setRating(e.target.value);
    };

    // Filters the movies based on the genre
    const handleGenreChange = (e) => {
        setGenre(e.target.value);
    };

    // Checks if the movie matches the genre
    const matchesGenre = (movie, genre) => {
      return genre === "All Genres"|| movie.genre.toLowerCase() === genre.toLowerCase();
    }

    // Checks if the movie matches the search term
    const matchesSearchTerm = (movie, searchTerm) => {
      return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    }

    const matchesRating = (movie, rating) => {
      switch(rating){
        case "All":
          return true;
        case "Good":
          return movie.rating >= 8;
        case "Ok":
          return movie.rating >= 5 && movie.rating < 8;
        case "Bad":
          return movie.rating < 5;
        default:
          return
      }
    }

    // Takes the movies array and filters it based on the search term
    const filteredMovies = movies.filter((movie) => 
        matchesGenre(movie, genre) && 
        matchesRating(movie, rating) &&
        matchesSearchTerm(movie, searchTerm)
    );

    return (
      <div>
        <input 
            className="search-input"
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={handleSearchChange}
        />

        <div className="filter-bar">
          <div className="filter-slot">
            <label>Genre</label>
            <select className="filter-dropdown" value={genre} onChange={handleGenreChange}>
              <option>
                All Genres
              </option>
              <option>
                Action
              </option>
              <option>
                Drama
              </option>
              <option>
                Fantasy
              </option>
              <option>
                Horror
              </option>
            </select>
          </div>
          <div className="filter-slot">
            <label>Rating</label>
            <select className="filter-dropdown" value={rating} onChange={handleRatingChange}>
              <option>
                All
              </option>
              <option>
                Good
              </option>
              <option>
                Ok
              </option>
              <option>
                Bad
              </option>
            </select>
          </div>
        </div>

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