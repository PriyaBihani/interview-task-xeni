import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../../types/user";
import { serviceGet } from "../../../utils/api";

const initialState: User = {
  userId: "",
  wishlist: [],
};

export const getToken: any = async () => {
  try {
    const response: string = await serviceGet("/token");
    return {
      userId: response,
    };
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
      state.userId = action.payload.userId;
    });
  },
});

export default userSlice.reducer;
