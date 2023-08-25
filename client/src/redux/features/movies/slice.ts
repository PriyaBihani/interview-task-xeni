import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { serviceGet } from "../../../utils/api";
import { Movie, MoviesState } from "../../../types/movies";

interface FetchMoviesParams {
  cursor: number;
  limit: number;
  sort: string;
  search: string;
}

interface FetchMoviesResponse {
  data: Movie[];
  message: string;
  success: boolean;
}

export const fetchMovies: any = createAsyncThunk(
  "movies/fetchMovies",
  async ({ cursor, limit, sort, search }: FetchMoviesParams) => {
    try {
      const response: FetchMoviesResponse = await serviceGet(
        `/movies?cursor=${cursor}&limit=${limit}&sort=${sort}&search=${search}`
      );
      return {
        movies: response.data,
      };
    } catch (error) {
      return {
        movies: [],
      };
    }
  }
);

const initialState: MoviesState = {
  movies: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload.movies;
    });
  },
});

export default moviesSlice.reducer;
