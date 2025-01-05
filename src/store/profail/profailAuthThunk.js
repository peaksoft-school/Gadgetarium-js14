import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";


export const saveProfileImage = createAsyncThunk(
    "profile/save_image",
    async (formData, { rejectWithValue }) => {  // formData теперь
      try {
        const { data } = await axiosInstance.post("/api/profile", formData, {
          headers: {
            "Content-Type": "multipart/form-data", // Убедитесь, что заголовок корректен
          },
        });
        return data;
      } catch (error) {
        return rejectWithValue(
          error.response ? error.response.data : error.message
        );
      }
    }
  );
  