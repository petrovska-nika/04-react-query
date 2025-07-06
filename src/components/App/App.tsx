import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Movie } from "../../types/movie";
import { fetchMovies } from "../../services/movieService";

import SearchBar from "./SearchBar/SearchBar";
import MovieGrid from "./MovieGrid/MovieGrid";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import MovieModal from "./MovieModal/MovieModal";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    if (!query) return;

    async function getMovies() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchMovies(query);
        if (data.length === 0) {
          toast("No movies found for your request.");
        }
        setMovies(data);
      } catch (err) {
        setError(true);
        toast.error("Failed to fetch movies");
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, [query]);

  const handleSearch = (newQuery: string) => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setMovies([]); // очищаємо попередні результати
  };

  const handleSelectMovie = (movie: Movie) => {
    setSelectedMovie(movie);
    document.body.style.overflow = "hidden"; // заборона скролу
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
    document.body.style.overflow = ""; // відновлення скролу
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <Toaster position="top-right" />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {!isLoading && !error && movies.length > 0 && (
        <MovieGrid movies={movies} onSelect={handleSelectMovie} />
      )}
      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
      )}
    </div>
  );
}
