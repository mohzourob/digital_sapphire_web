import axios from "../axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  token: "",
  isAuth: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.isAuth = true;
      state.error = "";
    },
    setError: (state, action) => {
      state.token = "";
      state.isAuth = false;
      state.error = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem("DS-Token");
      state.token = "";
      state.isAuth = false;
      state.error = "";
    },
  },
});

export const { setToken, setError, logout } = userSlice.actions;

export const createNonceCode = async (walletPublicAddress: String) => {
  const { data } = await axios.post("/users/nonceCode", {
    walletPublicAddress,
  });

  return data;
};

export const loginUser =
  (signature: String, walletPublicAddress: String) => async (dispatch: any) => {
    try {
      const { data } = await axios.post("/users/login", {
        signature,
        walletPublicAddress,
      });
      localStorage.setItem("DS-Token", data.token);
      dispatch(setToken(data.token));
    } catch (error: any) {
      dispatch(setError(error.message));
    }
  };

export default userSlice.reducer;
