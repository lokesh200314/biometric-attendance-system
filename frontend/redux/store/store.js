import { configureStore, createSlice } from '@reduxjs/toolkit';
import userReducer from '../slice/userSlice';

// Create a basic theme slice since error pages expect state.theme
const themeSlice = createSlice({
  name: 'theme',
  initialState: { theme: 'light' },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    }
  }
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeSlice.reducer,
  },
});