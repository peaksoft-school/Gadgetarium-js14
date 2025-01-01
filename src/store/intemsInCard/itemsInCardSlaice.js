import { createSlice } from "@reduxjs/toolkit";
import {
  deleteBasket,
  getItemsInCard,
  moveToFavoriteById,
  postBasketIzbran,
} from "./itemsInCardAuth";

const initialState = {
  items: [],
  error: null,
  loading: false,
};

export const itemsInCardSlaice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    incrementQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.itemNumber === action.payload
      );
      if (item) item.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.itemNumber === action.payload
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      // getItemsInCard
      .addCase(getItemsInCard.pending, (state) => {
        state.loading = true;
      })
      .addCase(getItemsInCard.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.elements;
      })
      .addCase(getItemsInCard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // deleteBasket
      .addCase(deleteBasket.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteBasket.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (item) => !action.meta.arg.includes(item.id)
        );
      })
      .addCase(deleteBasket.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // postBasketIzbran
      .addCase(postBasketIzbran.pending, (state) => {
        state.loading = true;
      })
      .addCase(postBasketIzbran.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(postBasketIzbran.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // moveToFavoriteById
      .addCase(moveToFavoriteById.pending, (state) => {
        state.loading = true;
      })
      .addCase(moveToFavoriteById.fulfilled, (state, action) => {
        state.loading = false;
        const movedItem = action.payload;
        state.items = state.items.filter((item) => item.id !== movedItem.id);
      })
      .addCase(moveToFavoriteById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.error("Ошибка при перемещении в избранное:", action.payload);
      });
  },
});

export const { incrementQuantity, decrementQuantity, removeItem } = itemsInCardSlaice.actions;

export const selectItemsCount = (state) =>
  state.basket.items.reduce((total, item) => total + item.quantity, 0);

export const selectTotalSum = (state) =>
  state.basket.items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

export const selectDiscount = (state) => {
  const totalSum = state.basket.items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  return totalSum > 5000 ? totalSum * 0.1 : 0;
};
