import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Movie } from "../../types/movie";
import styles from "./MovieModal.module.css";

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

export const MovieModal = ({ movie, onClose }: MovieModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <img
          src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
          alt={movie.title}
        />
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <p>
          <strong>Рейтинг:</strong> {movie.vote_average}
        </p>
        <p>
          <strong>Дата релізу:</strong> {movie.release_date}
        </p>
        <button onClick={onClose}>Закрити</button>
      </div>
    </div>,
    document.body
  );
};
