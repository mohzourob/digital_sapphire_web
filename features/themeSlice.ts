import { PaletteMode } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  theme: PaletteMode
} 

const initialState: ThemeState = {
  theme: "dark",
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.theme === "dark" ? state.theme = "light" : state.theme = "dark";
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;