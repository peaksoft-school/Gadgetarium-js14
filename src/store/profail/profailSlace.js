import { createSlice } from "@reduxjs/toolkit";
import { saveProfileImage } from "./profailAuthThunk";

const initialState = {
  loading: false,
  error: null,
  profileData: null, // Add this to store fetched profile data if needed
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(saveProfileImage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(saveProfileImage.fulfilled, (state, action) => {
        state.loading = false;
        state.profileData = action.payload; // Update with the response data
      })
      .addCase(saveProfileImage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Capture error details
      });
  },
});

