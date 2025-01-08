import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";

export const getTheChosen = createAsyncThunk(
  "getTheChosen",
  async (__, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/api/favourites");
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || {
          message: "Soemthing went wrong",
        }
      );
    }
  }
);

export const deleteTheChosen = createAsyncThunk(
  "deleteTheChosen",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.delete("/api/favourites");
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const addToFavoutires = createAsyncThunk(
  "addToFavoutires",
  async ({ subProductId, addOrDelete }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(
        `/api/favourites/${subProductId}?addOrDelete=${addOrDelete}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { massage: "Ошыпка при добавление в избранное" }
      );
    }
  }
);
