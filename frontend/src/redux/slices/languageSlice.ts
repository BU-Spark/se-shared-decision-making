import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LanguageState {
  language: string
}

const initialState: LanguageState = {
  language: 'en'
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: (
      state,
      action: PayloadAction<{ language: LanguageState}>
    ) => {
      const { language } = action.payload;

      // Add the language to the new category
      state = language

    }
  },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
