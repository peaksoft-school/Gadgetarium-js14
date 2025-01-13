import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";
import { toastifyMessage } from "../../utils/helpers/ToastSetting";

export const getProdates = createAsyncThunk(
  "getProdates",
  async ({ filter, from, before, keyWord, sortBy }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/api/admin/products", {
        params: { status: filter, keyWord, from, before, sortBy, pageSize: 10 },
      });
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const deleteProdates = createAsyncThunk(
  "deleteProdates",
  async (productId, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/api/admin/products/${productId}`);
      toastifyMessage({ message: "Успешна удалено" });
      return { id: productId };
    } catch (error) {
      toastifyMessage({ message: "не удалось удалить", status: "error" });

      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const createDiscount = createAsyncThunk(
  "discountns/createDiscount",
  async (
    { percentOfDiscount, dateOfStart, dateOfFinish, keyWord, ids },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const { data } = await axiosInstance.post("/api/admin/discounts", {
        productsId: ids,
        percentOfDiscount,
        dateOfStart,
        dateOfFinish,
        keyWord,
      });

      dispatch(getProdates(keyWord));
      toastifyMessage({ message: "Скидка успешно добавлено!" });
      return data;
    } catch (error) {
      toastifyMessage({ message: "Не удалось добавить скидка" });
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const uploadFile = createAsyncThunk(
  "file/upload",
  async (file, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const { data } = await axiosInstance.post(
        "/api/s3_file/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
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

export const saveBanner = createAsyncThunk(
  "save/save_banner",
  async (bannerList, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/api/banners", {
        bannerList,
      });
      toastifyMessage({ message: "Успешна загрузили " });

      return data;
    } catch (error) {
      toastifyMessage({ message: "Ошыпка загрузки", status: "error" });

      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const mailingModal = createAsyncThunk(
  "mailing_modal",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(
        "/api/mailing_lists",
        formData,
        {}
      );
      toastifyMessage({ message: "Успешно отправлено" });

      return data;
    } catch (error) {
      toastifyMessage({ message: "Ошибка отправки", status: "error" });
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);
