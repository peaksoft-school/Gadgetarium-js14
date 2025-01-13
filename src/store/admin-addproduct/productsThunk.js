import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";
import { toastifyMessage } from "../../utils/helpers/ToastSetting";

export const postFile = createAsyncThunk(
  "postFile",
  async (file, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const { data } = await axiosInstance.post(
        `/api/s3_file/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
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

export const postAllProducts = createAsyncThunk(
  "postProducts",
  async ({ products, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(
        "/api/admin/products",
        products
      );
      toastifyMessage({ message: "Товар успешно добавлен" });

      navigate("/admin");

      return data;
    } catch (error) {
      toastifyMessage({
        message: "Ошибка при добавлении товара!",
        status: "error",
      });
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);
