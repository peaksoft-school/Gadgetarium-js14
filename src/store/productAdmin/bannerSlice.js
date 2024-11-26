import { createSlice } from "@reduxjs/toolkit"
import { getBanners } from "./productAdminAuthThank";

const initialState = {
    banners:[],
    loading:false,
error:null ,   
}

export const bannersSlice=createSlice({
    name:'infografixs',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getBanners.pending,(state)=>{
            state.loading= true;
            state.error=null
        })

        .addCase(getBanners.fulfilled,(state,{payload})=>{
            state.loading=false;
            state.banners=payload
        })
        .addCase(getBanners.rejected,(state,{payload})=>{
            state.loading=false;
            state.error= payload
        })
    }
})

