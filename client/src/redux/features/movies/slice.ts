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
        ...(!response.data ||
          (response.data.length === 0 && { allDataLoaded: true })),
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
  allDataLoaded: false,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    resetMovies: (state) => {
      state.movies = [];
      state.allDataLoaded = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = [...state.movies, ...action.payload.movies];
        state.allDataLoaded = !!action.payload.allDataLoaded;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.movies = [];
        state.allDataLoaded = false;
      });
  },
});

export const { resetMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
