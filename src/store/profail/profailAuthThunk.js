import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";
import { toastifyMessage } from "../../utils/helpers/ToastSetting";

export const uploadFileToAWS = createAsyncThunk(
  "upload_file_to_aws",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(
        "/api/s3_file/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toastifyMessage({ message: "Успешна отправлен" });
      return data;
    } catch (error) {
      toastifyMessage({ message: "ошибка отправки", status: "error" });
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const updateProfileImage = createAsyncThunk(
  "update_profile_image",
  async (imageUrl, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(
        "/api/profile",
        { imageUrl },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toastifyMessage({ message: "Успешна загрузили" });
      return data;
    } catch (error) {
      toastifyMessage({ message: "ошибка загруски", status: "error" });

      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const updateProfile = createAsyncThunk(
  "update_profile",
  async (profileData, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.put("/api/profile", profileData);
      toastifyMessage({ message: "  успешно отправлено" });
      return data;
    } catch (error) {
      toastifyMessage({ message: "ошибка Личные данные ", status: "error" });
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const resetPassword = createAsyncThunk(
  "profile/resetPassword",
  async ({ currentPassword, newPassword }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.put(
        "/api/profile/reset-password",
        { currentPassword, newPassword },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toastifyMessage({ message: "Успешно изминили порль" });
      return data;
    } catch (error) {
      toastifyMessage({ message: "ошибка изминени пороль ", status: "error" });
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);
