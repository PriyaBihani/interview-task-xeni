import { createSelector } from "@reduxjs/toolkit";

export const loadState = createSelector(
  (state) => state.loading,
  (loading) => loading.isLoading
);
