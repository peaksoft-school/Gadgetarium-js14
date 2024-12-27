import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";

export const getAllCards = createAsyncThunk(
  "getAllCards",
  async (categoryId, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(`/api/catalog/${categoryId}`);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const getCategories = createAsyncThunk(
  "getAllCategories",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        `/api/admin/products/get_all/${id}/brands_and_sub_categories`
      );
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

const getSubCategories = createAsyncThunk(
  "getSubCategories",
  async (selectedCategoryId, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        `/api/admin/products/get_all/${selectedCategoryId}/brands_and_sub_categories`
      );
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const getFilter = createAsyncThunk(
  "getAllCards",
  async ({ subCategoryId, params }, { rejectWithValue }) => {
    try {
      const queryString = new URLSearchParams();

      if (params.memory && params.memory.length > 0)
        queryString.append("memory", params.memory);
      if (params.colour && params.colour.length > 0)
        queryString.append("colour", params.colour);
      if (params.RAM && params.RAM.length > 0)
        queryString.append("RAM", params.RAM);
      if (params.price) queryString.append("price", params.price);
      if (params.menuValue) queryString.append("sortBy", params.menuValue);

      if (params.createDate && Array.isArray(params.createDate)) {
        params.createDate.forEach((date) => {
          queryString.append("createDate", date);
        });
      }

      console.log("queryString:", queryString.toString());

      const { data } = await axiosInstance.get(
        `/api/catalog/${1}/${subCategoryId}`,
        {
          params: queryString,
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export default getSubCategories;

export const postFavourites = createAsyncThunk(
  "postFavourit",
  async ({ subProductId, addOrDelete }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        `/api/favourites/${subProductId}?addOrDelete=${addOrDelete}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

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

export const postToBasket = createAsyncThunk(
  "postToBasket",
  async ({ subProductId }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        `/api/basket/move_to_favorites_by_id/${subProductId}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);
