import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { fetchMovies } from "../services/movieService";
import { MoviesResponse } from "../types/movie";

export const useMovies = (query: string, page: number) => {
  return useQuery<
    MoviesResponse,
    Error,
    MoviesResponse,
    [string, string, number]
  >({
    queryKey: ["movies", query, page],
    queryFn: ({ queryKey }) => {
      const [, query, page] = queryKey;
      return fetchMovies(query, page);
    },
    enabled: !!query,
    keepPreviousData: true,
  });
};
