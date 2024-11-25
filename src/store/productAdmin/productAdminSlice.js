import { createSlice } from "@reduxjs/toolkit";
import {
  createDiscount,
  deleteProdates,
  getProdates,
  saveBanner,
  uploadFile,
} from "./productAdminAuthThank";

const initialState = {
  products: [],
  foundProducts: 0,
  currentPage: 0,
  totalPages: 0,
  loading: false,
  ids: [],
  error: null,
  keyWord: "",
};

export const productAdminSlice = createSlice({
  name: "productAdmin",
  initialState,
  reducers: {
    getIds(state, { payload }) {
      console.log("Payload received:", payload);
      state.ids = payload;
    },
    setKeyWord(state, { payload }) {
      state.keyWord = payload; // Для обновления keyWord
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProdates.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProdates.fulfilled, (state, { payload }) => {
        console.log("Data received from getProdates:", payload); // Логируем данные
        state.loading = false;
        state.products = payload.elements;
        state.foundProducts = payload.foundProducts;
        state.currentPage = payload.currentPage;
        state.totalPages = payload.totalPages;
      })
      .addCase(getProdates.rejected, (state, action) => {
        console.error("Error in getProdates:", action.error.payload); // Логируем ошибку
        state.loading = false;
        state.error = action.error.payload;
      })
      .addCase(deleteProdates.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProdates.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.payload;
      })
      .addCase(deleteProdates.fulfilled, (state, { payload }) => {
        const idToDelete = payload.id; // предполагаем, что API возвращает объект с id
        if (idToDelete) {
          state.products = state.products.filter(
            (product) => product.subProductId !== idToDelete
          );
        }
        state.loading = false;
      })

      .addCase(createDiscount.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createDiscount.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.products = [...state.products, payload];
      })
      .addCase(createDiscount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.payload;
      })

      .addCase(uploadFile.pending, (state) => {
        state.uploadLoading = true;
        state.error = null;
      })
      .addCase(uploadFile.fulfilled, (state, { payload }) => {
        state.uploadLoading = false;
        console.log("File upload success", payload);
      })
      .addCase(uploadFile.rejected, (state, { error }) => {
        state.uploadLoading = false;
        state.error = error.message;
      })

      .addCase(saveBanner.pending, (state) => {
        state.loading = false;
        state.error = null;
      })

      .addCase(saveBanner.fulfilled, (state, { payload }) => {
        state.loading = false;
        console.log("tuura emes", payload);
      })
      .addCase(saveBanner.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      });
  },
});

export const { getIds, setKeyWord } = productAdminSlice.actions;
