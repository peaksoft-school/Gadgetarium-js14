import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../config/axiosInstance";

export const getAllComments = createAsyncThunk(
  "getAllComments",
  async (reviewType, { rejectWithValue }) => {
    const allowedTypes = ["AllReviews", "Answered", "Unanswered"];
    if (!allowedTypes.includes(reviewType)) {
      return rejectWithValue("Invalid review type! Allowed values: AllReviews, Answered, Unanswered.");
    }

    try {

      const { data } = await axiosInstance.get("/api/reviews", {
        params: { param: reviewType }, 
      });

      return data; 
    } catch (error) {

      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const deleteComment = createAsyncThunk(
  'deleteComment',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.delete(`/api/reviews`, {
        params: { id }, 
      });

      return data; 
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const createCommentPost = createAsyncThunk(
  'reviews/createCommentPost',
  async ({ reviewId, answer }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/api/reviews', {
        reviewId,
        answer,
      });
      console.log(response.data,'FFF');
      
      return response.data; 
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message); 
    }
  }
);


  export const updateCommentResponse = createAsyncThunk(
    'reviews/updateCommentResponse', 
    async ({ reviewId, answer }, { rejectWithValue }) => {
      try {
        const response = await axiosInstance.put('/api/reviews', {
          reviewId,
          answer,
        });
        return response.data;
      } catch (error) {
        if (error.response && error.response.data) {
          return rejectWithValue(error.response.data);
        }
        return rejectWithValue(error.message);
      }
    }
  );

