import { createSlice } from "@reduxjs/toolkit";
import { addToFavoutires, deleteTheChosen, getTheChosen } from "./theChosenOneAuthThunk";

export const theChosenOneSlice = createSlice({
  name: "theChosenOne",
  initialState: {
    favourites: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTheChosen.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTheChosen.fulfilled, (state, action) => {
        state.loading = false;
        state.favourites = action.payload;
      })
      .addCase(getTheChosen.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteTheChosen.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTheChosen.fulfilled, (state) => {
        state.loading = false;
        state.favourites = [];
      })
      .addCase(deleteTheChosen.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addToFavoutires.pending,(state)=>{
        state.loading= true
        state.error=null
      })
      .addCase(addToFavoutires.fulfilled,(state,action)=>{
        state.loading=false
        state.message= action.payload.message
      })
      .addCase(addToFavoutires.rejected,(state,action)=>{
        state.loading = false
        state.error=action.payload || 'ру удалось добавить в тзбранное'
      })
  },
});
