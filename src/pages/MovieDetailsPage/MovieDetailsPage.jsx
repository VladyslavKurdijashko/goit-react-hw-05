import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../../componets/Loader/loader";
import styles from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/movies";

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=YOUR_API_KEY`
        );
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) return <Loader />;
  if (!movie) return null;

  const { title, overview, genres, poster_path } = movie;

  return (
    <div>
      <Link to={backLinkHref} className={styles.backLink}>
        Go back
      </Link>
      <div className={styles.movieDetails}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          className={styles.poster}
        />
        <div>
          <h2>{title}</h2>
          <p>{overview}</p>
          <h3>Genres:</h3>
          <ul>
            {genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.additionalInfo}>
        <h3>Additional information:</h3>
        <ul>
          <li>
            <Link to="cast" state={{ from: backLinkHref }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
