import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  errorDispatch: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      console.log("Sign-in process started");
      state.loading = true;
    },
    signInsuccess: (state, action) => {
      console.log("Sign-in successful, payload:", action.payload);
      state.currentUser = action.payload;
      state.loading = false;
      state.errorDispatch = null;
    },
    signInFailure: (state, action) => {
      console.log("Sign-in failed, error:", action.payload);
      state.errorDispatch = action.payload;
      state.loading = false;
    },

    signoutStart: (state) => {
      state.loading = true;
    },
    signoutsuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.errorDispatch = null;
    },
    signoutFailure: (state, action) => {
      state.errorDispatch = action.payload;
      state.loading = false;
    },
  },
});

export const {
  signInFailure,
  signInStart,
  signInsuccess,
  signoutStart,
  signoutsuccess,
  signoutFailure,
} = userSlice.actions;

export default userSlice.reducer;
