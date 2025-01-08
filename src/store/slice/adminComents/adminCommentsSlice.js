import { createSlice } from "@reduxjs/toolkit";
import {
  createCommentPost,
  deleteComment,
  getAllComments,
  updateCommentResponse,
} from "./adminCommentsAuth";

const initialState = {
  comments: [],
  loading: false,
  error: null,
};

export const adminCommentsSlice = createSlice({
  name: "adminComments",
  initialState,
  reducers: {},
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
      })
      .addCase(deleteComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = state.comments.filter(
          (comment) => comment.id !== action.payload.id
        );
      })
      .addCase(deleteComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createCommentPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCommentPost.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload && action.payload.comment) {
          const existingComment = state.comments.find(
            (comment) => comment.id === action.payload.comment.id
          );
          if (existingComment) {
            Object.assign(existingComment, action.payload.comment);
          } else {
            state.comments.unshift(action.payload.comment);
          }
        }
      })

      .addCase(createCommentPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(updateCommentResponse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCommentResponse.fulfilled, (state) => {
        state.loading = false;
      })

      .addCase(updateCommentResponse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default adminCommentsSlice.reducer;
