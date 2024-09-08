import { useState } from "react";
import { fetchMoviesByQuery } from "../../componets/Api/api";
import MovieList from "../../componets/MovieList/MovieList";
import styles from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = async (event) => {
    event.preventDefault();
    const data = await fetchMoviesByQuery(query);
    setMovies(data);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie"
        />
        <button type="submit">Search</button>
      </form>
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
