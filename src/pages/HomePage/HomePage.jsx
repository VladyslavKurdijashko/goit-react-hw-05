import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../componets/Api/api";
import styles from "./HomePage.module.css";
import MovieList from "../../componets/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await fetchTrendingMovies();
      setMovies(data);
    };

    fetchMovies();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
