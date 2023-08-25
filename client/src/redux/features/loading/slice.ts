import { createSlice } from "@reduxjs/toolkit";
import { LoadingState } from "../../../types/loading";

const initialState: LoadingState = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoadingTrue(state, action) {
      state.isLoading = true;
    },
    setLoadingFalse(state, action) {
      state.isLoading = false;
    },
  },
});

export const { setLoadingTrue, setLoadingFalse } = loadingSlice.actions;

export default loadingSlice.reducer;
