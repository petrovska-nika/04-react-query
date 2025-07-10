import axios from "axios";
import { MoviesResponse } from "../types/movie";

const API_KEY = "84e477c03676d090ed1c4bbccf4738aa";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (
  query: string,
  page: number
): Promise<MoviesResponse> => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
      page,
    },
  });

  return response.data; // ✅ повертаємо об'єкт з полями: results, total_pages тощо
};
