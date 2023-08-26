import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../../types/user";
import { serviceGet, servicePost } from "../../../utils/api";

const initialState: User = {
  userId: "",
  watchlist: [],
};

export const getToken: any = async () => {
  try {
    if (localStorage.getItem("userId") === null) {
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
};

const userSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getToken.fulfilled, (state, action) => {
      localStorage.setItem("userId", action.payload.userId);
      state.userId = action.payload.userId;
      state.watchlist = action.payload.watchlist;
    });
  },
});

export default userSlice.reducer;
