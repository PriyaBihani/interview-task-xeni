import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../../types/user";
import { serviceGet } from "../../../utils/api";

const initialState: User = {
  userId: "",
  wishlist: [],
};

interface FetchTokenResponse {
  data: string;
  message: string;
  success: boolean;
}

export const getToken: any = async () => {
  try {
    if (localStorage.getItem("userId") === null) {
      const response: FetchTokenResponse = await serviceGet("/user/token");
      return {
        userId: response.data,
      };
    } else {
      return {
        userId: localStorage.getItem("userId"),
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
    });
  },
});

export default userSlice.reducer;
