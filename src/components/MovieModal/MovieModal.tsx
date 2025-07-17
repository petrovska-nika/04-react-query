import React from "react";
import { createPortal } from "react-dom";
import css from "./MovieModal.module.css";
import { Movie } from "../../types/movie";

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

const modalRoot = document.getElementById("modal-root");

const MovieModal: React.FC<MovieModalProps> = ({ movie, onClose }) => {
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!modalRoot) return null;

  return createPortal(
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <button
          className={css.close}
          onClick={onClose}
          aria-label="Close modal"
        >
          ✖
        </button>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
      </div>
    </div>,
    modalRoot
  );
};

export default MovieModal;
