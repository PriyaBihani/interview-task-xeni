import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { serviceGet, servicePost } from "../../../utils/api";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async ({ page, limit, sort, filter, search }) => {
    try {
      const response = await serviceGet(
        `/movies?page=${page}&limit=${limit}&sort=${sort}&&filter=${filter}&search=${search}`
      );
      return {
        movies: response.data.movies,
      };
    } catch (error) {
      return {
        movies: [],
      };
    }
  }
);

const initialState = {
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
