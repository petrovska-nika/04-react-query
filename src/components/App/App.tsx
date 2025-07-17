import { useState } from "react";
import { useMovies } from "../../hooks/useMovies";

import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import MovieList from "../MovieList/MovieList";
import MovieGrid from "../MovieGrid/MovieGrid";
import MovieModal from "../MovieModal/MovieModal";

import ReactPaginate from "react-paginate";
import css from "./App.module.css";

import { Movie } from "../../types/movie";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const { data, isLoading, isError, isSuccess } = useMovies(query, page);

  const handleSubmit = (value: string) => {
    setQuery(value);
    setPage(1);
  };

  const handleSelectMovie = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className={css.app}>
      <SearchBar onSubmit={handleSubmit} />

      {isLoading && <Loader />}
      {isError && <ErrorMessage message="Щось пішло не так" />}

      {isSuccess && data?.total_pages > 1 && (
        <ReactPaginate
          pageCount={data.total_pages}
          pageRangeDisplayed={5}
          marginPagesDisplayed={1}
          onPageChange={({ selected }) => setPage(selected + 1)}
          forcePage={page - 1}
          containerClassName={css.pagination}
          activeClassName={css.active}
          nextLabel="→"
          previousLabel="←"
        />
      )}

      {isSuccess && (
        <MovieGrid movies={data?.results || []}>
          <MovieList
            movies={data?.results || []}
            onSelectMovie={handleSelectMovie}
          />
        </MovieGrid>
      )}

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
