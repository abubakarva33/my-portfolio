import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkModeActive: true,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkModeActive = !state.isDarkModeActive;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
const themeReducer = themeSlice.reducer;
export default themeReducer;
