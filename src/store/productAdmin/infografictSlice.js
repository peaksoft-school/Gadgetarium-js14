import { createSlice } from "@reduxjs/toolkit";
import { getInfographic } from "./infografictAthThunk";

const initialState = {
  infografics: {},
  loading: false,
  data: null,
  error: null,
};

export const infografictSlice = createSlice({
  name: "infographics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getInfographic.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getInfographic.fulfilled, (state, action) => {
        state.loading = false;
        state.infografics = action.payload;
      })
      .addCase(getInfographic.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Что-то пошло не так";
      });
  },
});

export default infografictSlice.reducer;
