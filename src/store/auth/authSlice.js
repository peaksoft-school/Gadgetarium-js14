import { createSlice } from "@reduxjs/toolkit";
import { signInRequest, signUpRequest } from "./authThank";

const getInitialState = () => {
  const json = localStorage.getItem("Gadgetarium");
  if (json) {
    const parsedData = JSON.parse(json);

    return {
      isLoading: false,
      error: null,

      userData: {
        token: parsedData.token,
        email: parsedData.email,
        role: parsedData.role,
        name: parsedData.name,
        isAuth: true,
      },
    };
  }

  return {
    isLoading: false,
    error: null,
    userData: {
      name: "",
      email: "",
      token: "",
      role: "GUEST",
      isAuth: false,
    },
  };
};

const addAsyncCases = (builder, asyncThunk, dataField) => {
  builder
    .addCase(asyncThunk.fulfilled, (state, action) => {
      state[dataField] = action.payload;
      state.isLoading = false;
    })
    .addCase(asyncThunk.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(asyncThunk.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
};

export const authSlice = createSlice({
  name: "auth",
  initialState: getInitialState(),
  reducers: {
    logout: (state) => {
      state.userData = {
        role: "GUEST",
        email: "",
        token: "",
        name: "",
        isAuth: false,
      };
      localStorage.removeItem("Gadgetarium");
    },
    autoLogin: (state, { payload }) => {
      (state.userData = payload), (state.userData.isAuth = true);
    },
  },
  extraReducers: (builder) => {
    addAsyncCases(builder, signInRequest, "userData");
    addAsyncCases(builder, signUpRequest, "userData");
  },
});

export const { logout, autoLogin } = authSlice.actions;
export const authAxtions = authSlice.actions;
