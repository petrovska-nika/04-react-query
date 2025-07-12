import { useState } from "react";
import { useMovies } from "../../hooks/useMovies";
import MovieList from "../MovieList/MovieList";
import SearchBar from "../SearchBar/SearchBar";
import ReactPaginate from "react-paginate";
import css from "./App.module.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useMovies(query, page);

  const handleSubmit = (value: string) => {
    setQuery(value);
    setPage(1);
  };

  if (isError) return <p>Error fetching data</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      {data?.total_pages && data.total_pages > 1 && (
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

      {data?.results && <MovieList movies={data.results} />}
    </div>
  );
};

export default App;
