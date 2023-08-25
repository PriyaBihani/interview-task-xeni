import { configureStore } from "@reduxjs/toolkit";

import loadingReducer from "./features/loading/slice";
import authReducer from "./features/auth/slice";
import movieReducer from "./features/movies/slice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
    movie: movieReducer,
  },
});
