import { createSlice, createAsyncThunk, AnyAction } from "@reduxjs/toolkit";
import { serviceGet } from "../../../utils/api";

export interface Movie {
  id: number;
  posterUrl: string;
  releaseYear: string;
  title: string;
}

interface FetchMoviesParams {
  page: number;
  limit: number;
  sort: string;
  search: string;
}

interface MoviesState {
  movies?: Movie[];
}

interface FetchMoviesResponse {
  data: Movie[];
  message: string;
  success: boolean;
}

export const fetchMovies: any = createAsyncThunk(
  "movies/fetchMovies",
  async ({ page, limit, sort, search }: FetchMoviesParams) => {
    try {
      const response: FetchMoviesResponse = await serviceGet(
        `/movies?page=${page}&limit=${limit}&sort=${sort}&search=${search}`
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
