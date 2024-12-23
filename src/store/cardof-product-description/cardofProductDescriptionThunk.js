import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";

export const getLastViews = createAsyncThunk(
  "getViews",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/api/user/products/last_views");
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const getCharacteristics = createAsyncThunk(
  "getCharacteristics",
  async (CardId, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        `/api/user/products/get-by-id/${CardId}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const postToFavorites = createAsyncThunk(
  "postToFavorites",
  async (productId, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(
        "/api/basket/move_to_favorites",
        { productId }
      );
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

// /api/basket/move_to_favorites
