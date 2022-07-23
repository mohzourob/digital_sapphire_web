import { createSlice } from '@reduxjs/toolkit';

const initialState: any= {
    token: ""
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setToken,  } = userSlice.actions;

export default userSlice.reducer;