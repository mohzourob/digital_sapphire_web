import { createSlice } from '@reduxjs/toolkit';

interface moralisState {
    walletAddress: any, 
    chainId: any 
    marketAddress: any 
    contractABI: any
  } 

const initialState  : moralisState= {
    walletAddress: "", 
    chainId: "", 
    marketAddress: "", 
    contractABI: ""
};

export const moralisDappSlice = createSlice({
  name: 'moralisDapp',
  initialState,
  reducers: {
    setWalletAddress: (state, action) => {
      state.walletAddress = action.payload;
    },
    setChainId: (state, action) => {
        state.chainId = action.payload;
      },
      setMarketAddress: (state, action) => {
        state.marketAddress = action.payload;
      },
      setContractABI: (state, action) => {
        state.contractABI = action.payload;
      },
  },
});

export const { setWalletAddress, setChainId, setMarketAddress, setContractABI } = moralisDappSlice.actions;

export default moralisDappSlice.reducer;