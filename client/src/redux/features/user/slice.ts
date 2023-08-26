import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../../types/user";
import { serviceDelete, serviceGet, servicePost } from "../../../utils/api";

const initialState: User = {
  userId: "",
  watchlist: [],
};

export const getUser: any = createAsyncThunk("user/getUser", async () => {
  try {
    if (!localStorage["userId"]) {
      const response: any = await servicePost("/user/token", {});
      return {
        userId: response.data,
        watchlist: [],
      };
    } else {
      const userId = localStorage.getItem("userId");
      const response: any = await serviceGet(`/watchlist/${userId}`);
      return {
        userId: userId,
        watchlist: response.data,
      };
    }
  } catch (error) {
    return {
      error: error,
    };
  }
});

export const addToWatchlist: any = createAsyncThunk(
  "user/addToWatchlist",
  async ({ movieId, title, releaseDate, posterUrl }: any) => {
    try {
      const userId = localStorage.getItem("userId");
      const response: any = await servicePost(`/watchlist/${userId}`, {
        movieId,
        title,
        releaseDate,
        posterUrl,
      });

      return {
        watchlist: response.data,
      };
    } catch (error) {
      console.log(error);
      return {
        error: error,
      };
    }
  }
);

export const removeFromWatchlist: any = createAsyncThunk(
  "user/removeFromWatchlist",
  async (movieId: number) => {
    try {
      const userId = localStorage.getItem("userId");
      const response: any = await serviceDelete(
        `/watchlist/${movieId}/${userId}`
      );

      return {
        watchlist: response.data.movies,
      };
    } catch (error) {
      console.log(error);
      return {
        error: error,
      };
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        localStorage.setItem("userId", action.payload.userId);
        state.userId = action.payload.userId;
        state.watchlist = action.payload.watchlist;
      })
      .addCase(addToWatchlist.fulfilled, (state, action) => {
        state.watchlist = action.payload.watchlist;
      })
      .addCase(removeFromWatchlist.fulfilled, (state, action) => {
        state.watchlist = action.payload.watchlist;
      });
  },
});

export default userSlice.reducer;
