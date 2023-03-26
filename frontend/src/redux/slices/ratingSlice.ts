import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RatingState {
  leastImportant: string[];
  lessImportant: string[];
  important: string[];
  mostImportant: string[];
}

const initialState: RatingState = {
  leastImportant: [],
  lessImportant: [],
  important: [],
  mostImportant: []
};

export const ratingSlice = createSlice({
  name: "rating",
  initialState,
  reducers: {
    addToCategory: (
      state,
      action: PayloadAction<{ category: keyof RatingState; questionText: string }>
    ) => {
      const { category, questionText } = action.payload;

      // Remove the question from the previous category
      Object.values(state).forEach((questionsArray) => {
        const index = questionsArray.indexOf(questionText);
        if (index !== -1) {
          questionsArray.splice(index, 1);
        }
      });

      // Add the question to the new category
      state[category].push(questionText);

    },
    resetCategories: (state) => {
      state.leastImportant = [];
      state.lessImportant = [];
      state.important = [];
      state.mostImportant = [];
    },
  },
});

export const { addToCategory, resetCategories } = ratingSlice.actions;
export default ratingSlice.reducer;
