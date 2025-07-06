import axios from "axios";
import { Movie } from "../types/movie";

const API_URL = "https://api.themoviedb.org/3/search/movie";

interface FetchMoviesResponse {
  results: Movie[];
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const config = {
    params: {
      query,
    },
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  };

  const { data } = await axios.get<FetchMoviesResponse>(API_URL, config);
  return data.results;
};
