import { createSlice } from '@reduxjs/toolkit';
import { getProduct } from './innerPageCardThunk';

export const innerPageCardSlice = createSlice({
  name: 'innerPageCard',
  initialState: {
    product: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default innerPageCardSlice.reducer;
