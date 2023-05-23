import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShow: false,
};

const showCartSlice = createSlice({
  name: "showCart",
  initialState,
  reducers: {
    toggle(state) {
      state.isShow = !state.isShow;
    },
  },
});

export default showCartSlice;
