import { createSlice } from "@reduxjs/toolkit";
import { postAllProducts, postFile } from "./productsThunk";

const initialState = {
  mainData: {
    subProducts: [],
  },
  images: [],
  isLoading: false,
  error: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductData: (state, action) => {
      const newProduct = {
        ...action.payload,
        brand: state.mainData.brand,
        date: state.mainData.dateOfIssue,
      };
      state.mainData.subProducts.push(newProduct);
    },
    setMainData: (state, action) => {
      state.mainData = { ...state.mainData, ...action.payload };
    },
    setDescriptionQuillData: (state, action) => {
      state.mainData = {
        ...state.mainData,
        description: action.payload,
      };
    },
    setProductPrice: (state, action) => {
      const { productId, updatedPrice } = action.payload;

      const price = Number(updatedPrice);

      if (productId) {
        const product = state.mainData.subProducts.find(
          (item) => item.characteristics.productId === productId
        );
        if (product) {
          product.price = price;
        }
      } else {
        state.mainData.subProducts.forEach((item) => {
          item.price = price;
        });
      }
    },

    setProductQuantity: (state, action) => {
      console.log(action);

      const { productId, updatedQuantity } = action.payload;

      const quantity = Number(updatedQuantity);

      if (productId) {
        const product = state.mainData.subProducts.find(
          (item) => item.characteristics.productId === productId
        );
        if (product) {
          product.quantity = quantity;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postFile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postFile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.images.push(action.payload);
      })
      .addCase(postFile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      .addCase(postAllProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(postAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(postAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const {
  setProductData,
  setMainData,
  setProductPrice,
  setProductQuantity,
  setAllProductData,
} = productSlice.actions;

export default productSlice.reducer;
