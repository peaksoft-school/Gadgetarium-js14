import { createSlice } from "@reduxjs/toolkit";
import { getAllComments } from "./adminCommentsAuth";

const initialState = {
  comments: [],
  loading: false,
  error: null,
};

export const adminCommentsSlice = createSlice({
  name: "adminComments",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllComments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllComments.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = action.payload;
      })
      .addCase(getAllComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
      });
  },
});

export default adminCommentsSlice.reducer;
