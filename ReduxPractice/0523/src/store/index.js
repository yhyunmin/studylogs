import { configureStore, createSlice } from "@reduxjs/toolkit";
import showCartSlice from "./ui-cardButton";
import cartSlice from "./cart";
import uiSlice from "./ui-slice";
import cartSlice2 from "./cart-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    show: showCartSlice.reducer,
    ui: uiSlice.reducer,
    cart2: cartSlice2.reducer,
  },
});

// export const cartAction = cartSlice.actions;
export const cart2Action = cartSlice2.actions;
export const showCartAction = showCartSlice.actions;

export default store;
