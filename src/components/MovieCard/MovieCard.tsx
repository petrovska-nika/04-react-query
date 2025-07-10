import React from "react";
import { Movie } from "../../types/movie";
import css from "./MovieCard.module.css";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : "https://via.placeholder.com/300x450?text=No+Image";

  return (
    <div className={css.card}>
      <img src={poster} alt={movie.title} className={css.image} />
      <h3 className={css.title}>{movie.title}</h3>
      <p className={css.date}>{movie.release_date}</p>
    </div>
  );
};

export default MovieCard;
