import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RatingState {
  leastImportant: number[];
  lessImportant: number[];
  important: number[];
  mostImportant: number[];
}

const initialState: RatingState = {
  leastImportant: [],
  lessImportant: [],
  important: [],
  mostImportant: [],
};

export const ratingSlice = createSlice({
  name: "rating",
  initialState,
  reducers: {
    addToCategory: (
      state,
      action: PayloadAction<{ category: keyof RatingState; questionIndex: number }>
    ) => {
      const { category, questionIndex } = action.payload;
      state[category].push(questionIndex);
    },
  },
});

export const { addToCategory } = ratingSlice.actions;
export default ratingSlice.reducer;
