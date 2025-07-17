import React from "react";
import { createPortal } from "react-dom";
import css from "./MovieModal.module.css";
import { Movie } from "../../types/movie";

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

const modalRoot = document.getElementById("modal-root")!;

const MovieModal: React.FC<MovieModalProps> = ({ movie, onClose }) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return createPortal(
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <button className={css.close} onClick={onClose}>
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
