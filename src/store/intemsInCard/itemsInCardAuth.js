import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";

// Fetch items in the basket with pagination
export const getItemsInCard = createAsyncThunk(
  "basket/getItemsInCard",
  async ({ page = 1, pageSize = 5 }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/api/basket/basket", {
        params: { page, pageSize },
      });
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Не удалось получить корзину"
      );
    }
  }
);

// Delete multiple items from the basket
export const deleteBasket = createAsyncThunk(
  "basket/deleteBasket",
  async (ids, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.delete("/api/basket/deleted_basket", {
        data: ids, 
      });
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Не удалось выполнить удаление"
      );
    }
  }
);

export const moveToFavoriteById = createAsyncThunk(
    "basket/moveToFavoriteById",
    async (id, { rejectWithValue }) => {
      try {
        const { data } = await axiosInstance.post(`/api/basket/move_to_favorites_by_id`, null, {
          params: { id }, 
        });
        return data;
      } catch (error) {
        return rejectWithValue(
          error.response?.data?.message || "Не удалось переместить в избранное"
        );
      }
    }
  );
  

export const postBasketIzbran = createAsyncThunk(
  "basket/postBasketIzbran",
  async (ids, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/api/basket/move_to_favorites", ids);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Не удалось переместить в избранное"
      );
    }
  }
);



export const deleteBasketById = createAsyncThunk(
  "basket/deleteBasketById",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(
        "/api/basket/deleted_basket_by_id",
        null,
        {
          params: { id },
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Не удалось удалить корзину"
      );
    }
  }
);

