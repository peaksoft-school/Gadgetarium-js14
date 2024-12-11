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
      console.log("Запрос с параметром:", reviewType); 

      const { data } = await axiosInstance.get("/api/reviews", {
        params: { param: reviewType }, 
      });

      return data; 
    } catch (error) {
      console.error("Ошибка при выполнении запроса:", error);

      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
