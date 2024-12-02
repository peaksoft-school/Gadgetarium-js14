import { createSlice } from "@reduxjs/toolkit";
import { postAllProducts, postFile } from "./productsThunk";

const initialState = {
  mainData: {
    subProducts: [],
  },
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

      console.log(newProduct);
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

      if (productId) {
        const product = state.mainData.subProducts.find(
          (item) => item.characteristics.productId === productId
        );
        if (product) {
          product.price = updatedPrice;
        }
      } else {
        state.mainData.subProducts.forEach((item) => {
          item.price = updatedPrice;
        });
      }
    },

    setProductQuantity: (state, action) => {
      const { productId, updatedQuantity } = action.payload;

      if (productId) {
        const product = state.mainData.subProducts.find(
          (item) => item.characteristics.productId === productId
        );
        if (product) {
          product.quantity = updatedQuantity;
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
