import { createSlice } from "@reduxjs/toolkit";
import { resetPassword, updateProfile, updateProfileImage, uploadFileToAWS } from "./profailAuthThunk";

const initialState = {
  profileData: null,
  loading: false,
  error: null,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadFileToAWS.pending, (state) => {
        state.loading = true;
      })
      .addCase(uploadFileToAWS.fulfilled, (state, action) => {
        state.loading = false;
        state.profileData = action.payload;
      })
      .addCase(uploadFileToAWS.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateProfileImage.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProfileImage.fulfilled, (state, action) => {
        state.loading = false;
        state.profileData = action.payload;
      })
      .addCase(updateProfileImage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
      
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profileData = action.payload
        
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(resetPassword.fulfilled,(state,action)=>{
        state.loading=false
        state.profileData=action.payload
      })
      .addCase(resetPassword.pending,(state)=>{
        state.loading=true
      })
      .addCase(resetPassword.rejected,(state,action)=>{
        state.loading=false
        state.profileData=action.payload
      })

      
  },
});

export default profileSlice.reducer;
