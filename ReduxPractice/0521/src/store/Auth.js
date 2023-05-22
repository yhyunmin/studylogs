import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  email: "",
  password: "",
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    emailValue(state, action) {
      state.email = action.payload;
    },
    passwordValue(state, action) {
      state.password = action.payload;
    },
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
export const AuthAction = authSlice.actions;
export default authSlice.reducer;
