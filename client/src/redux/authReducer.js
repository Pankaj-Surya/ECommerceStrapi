import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    // isFetching: true,
    // error: true,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
    // console.log("Action",action.payload) 
     state.currentUser = action.payload;
     state.isFetching = false;
    },
    loginFailure: (state) => {
      state.error=true;
      state.isFetching=false;
    },
    logout: (state) => {
      state.currentUser = null;
      state.isFetching = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;
export default userSlice.reducer;