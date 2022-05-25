import { configureStore } from '@reduxjs/toolkit';
import modalSlice from '../features/modalSlice';
import moralisDappSlice from '../features/moralisDappSlice';
import themeSlice from '../features/themeSlice';

export default configureStore({
  reducer: {
    theme: themeSlice,
    modal: modalSlice,
    moralisDapp: moralisDappSlice
  },
});