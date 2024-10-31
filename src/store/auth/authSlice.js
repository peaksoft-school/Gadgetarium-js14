import { Email } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 isAuth :true,
 role:'GUEST',
 name:'',
 email:'',
 token:'',
};

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{}
})