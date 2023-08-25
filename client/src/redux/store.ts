import { configureStore, combineReducers } from "@reduxjs/toolkit";

import loadingReducer from "./features/loading/slice";
// import authReducer from "./features/auth/slice";
import movieReducer from "./features/movies/slice";

const rootReducer = combineReducers({
  // auth: authReducer,
  loading: loadingReducer,
  movie: movieReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
