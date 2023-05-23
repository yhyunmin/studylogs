import { configureStore, createSlice } from "@reduxjs/toolkit";
import showCartSlice from "./ui-cardButton";
import cartSlice from "./cart";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    show: showCartSlice.reducer,
  },
});

export const cartAction = cartSlice.actions;
export const showCartAction = showCartSlice.actions;

export default store;
