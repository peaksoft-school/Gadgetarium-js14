import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";

export const getProdates = createAsyncThunk(
  "getProdates",
  async ({ filter, keyWord }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/api/admin/products", {
        params: { status: filter, keyWord },
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
      return { id: productId };
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
); 

export const createDiscount = createAsyncThunk(
  "discountns/createDiscount",
  async (
    { percentOfDiscount, dateOfStart, dateOfFinish, keyWord },
    { rejectWithValue, dispatch }
  ) => {
    let productsId = 1;
    try {
      const { data } = await axiosInstance.post("/api/admin/discounts", {
        productsId: [productsId],
        percentOfDiscount,
        dateOfStart,
        dateOfFinish,
        keyWord,
      });
      dispatch(getProdates(keyWord));
      return data;
    } catch (error) {
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
      return data;
    } catch (error) {
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

      const { data } = await axiosInstance.post("/api/mailing_lists", formData,{
      });
      
      return data;  
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);
