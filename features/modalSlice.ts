import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  open: boolean,
  message: string
  modalType: "success" | "fail" | "info",
} 

const initialState: ThemeState = {
    open: false,
    message: "",
    modalType: "info"
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.open = !state.open;
      state.message = action.payload.message;
      state.modalType = action.payload.modalType;
    },
    closeModal: (state) => {
      state.open = !state.open;
      state.message = "";
      state.modalType = "info";
    }
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;