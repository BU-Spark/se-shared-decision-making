import { configureStore } from "@reduxjs/toolkit";
import ratingReducer from "./slices/ratingSlice";
import languageSlice from "./slices/languageSlice";

export const store = configureStore({
  reducer: {
    rating: ratingReducer,
    language: languageSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
