import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../services/movieService";
import { MoviesResponse } from "../types/movie";

export const useMovies = (query: string, page: number) => {
  return useQuery<MoviesResponse, Error>({
    queryKey: ["movies", query, page],
    queryFn: () => fetchMovies(query, page),
    enabled: !!query,
    staleTime: 5 * 60 * 1000,

    ...{ keepPreviousData: true },
  });
};
