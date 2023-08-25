import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const getMovies = async (req, res) => {
  try {
    const {
      cursor = 0,
      limit = 10,
      sort = "popularity.desc",
      search = "",
    } = req.query;

    const queryParams = {
      api_key: process.env.MOVIE_DB_API_KEY,
      page: Math.floor(cursor / limit) + 1,
      sort_by: sort,
      query: search,
    };

    const url = `${BASE_URL}/discover/movie`;

    const response = await axios.get(url, { params: queryParams });
    const movies = response.data.results;

    const liteMovies = movies.map((movie) => ({
      id: movie.id,
      title: movie.title,
      releaseYear: movie.release_date.substring(0, 4),
      posterUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    }));

    return res.status(200).json({
      message: "Movies fetched successfully",
      success: true,
      data: liteMovies,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const getMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const queryParams = {
      api_key: process.env.MOVIE_DB_API_KEY,
    };
    const url = `${BASE_URL}/${id}`;
    const response = await axios.get(url, { params: queryParams });

    res.status(200).json({
      message: "Movies fetched successfully",
      success: true,
      data: response.data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};
