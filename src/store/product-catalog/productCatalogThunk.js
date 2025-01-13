import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";
import { toastifyMessage } from "../../utils/helpers/ToastSetting";

export const getAllCards = createAsyncThunk(
  "getAllCards",
  async ({ categoryId, params }, { rejectWithValue }) => {
    try {
      const queryString = new URLSearchParams();

      if (params.memory && params.memory.length > 0)
        queryString.append("memory", `${params.memory}GB`);

      if (params.colour && params.colour.length > 0)
        queryString.append("colour", params.colour);

      if (params.RAM && params.RAM.length > 0)
        queryString.append("RAM", params.RAM);

      if (params.price) queryString.append("priceFrom", params.price[0]);
      if (params.price) queryString.append("priceTo", params.price[1]);

      if (params.menuValue) queryString.append("sortBy", params.menuValue);

      if (params.createDate && Array.isArray(params.createDate)) {
        params.createDate.forEach((date) => {
          queryString.append("createDate", date);
        });
      }

      if (params.pageSize) queryString.append("pageSize", params.pageSize);

      const { data } = await axiosInstance.get(`/api/catalog/${categoryId}`, {
        params: queryString,
      });
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
  "getFilterCard",
  async ({ categoryId, subCategoryId, params }, { rejectWithValue }) => {
    try {
      const queryString = new URLSearchParams();

      if (params.memory && params.memory.length > 0)
        queryString.append("memory", params.memory);

      if (params.colour && params.colour.length > 0)
        queryString.append("colour", params.colour);

      if (params.RAM && params.RAM.length > 0)
        queryString.append("RAM", params.RAM);

      if (params.price) queryString.append("priceFrom", params.price[0]);
      if (params.price) queryString.append("priceTo", params.price[1]);

      if (params.menuValue) queryString.append("sortBy", params.menuValue);

      if (params.createDate && Array.isArray(params.createDate)) {
        params.createDate.forEach((date) => {
          queryString.append("createDate", date);
        });
      }

      if (params.pageSize) queryString.append("pageSize", params.pageSize);

      const { data } = await axiosInstance.get(
        `/api/catalog/${categoryId}/${subCategoryId}`,
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
  async (
    { subProductId, addOrDelete, navigate },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const response = await axiosInstance.post(
        `/api/favourites/${subProductId}?addOrDelete=${addOrDelete}`
      );

      dispatch(getAllCards(1));

      if (addOrDelete === true) {
        toastifyMessage({ message: "Товар успешно добавлен в избранное!" });
      } else if (addOrDelete === false) {
        toastifyMessage({
          message: "Товар удалён из избранного!",
          status: "error",
        });
      }

      return response.data;
    } catch (error) {
      toastifyMessage(
        error.response
          ? error.response.data.message || "Ошибка запроса"
          : "Что-то пошло не так!"
      );

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
  async ({ subProductId, quantity }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        `/api/basket/add?id=${subProductId}&quantity=${quantity}`
      );
      toastifyMessage({ message: "Товар успешно добавлен в корзину" });

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);
