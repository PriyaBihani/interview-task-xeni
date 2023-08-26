import { configureStore, combineReducers } from "@reduxjs/toolkit";

import loadingReducer from "./features/loading/slice";
// import authReducer from "./features/auth/slice";
import movieReducer from "./features/movies/slice";
import userReducer from "./features/user/slice";

const rootReducer = combineReducers({
  loading: loadingReducer,
  movie: movieReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
