import { configureStore } from '@reduxjs/toolkit';
import modalSlice from '../features/modalSlice';
import themeSlice from '../features/themeSlice';

export default configureStore({
  reducer: {
    theme: themeSlice,
    modal: modalSlice
  },
});