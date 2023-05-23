import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: 0,
  price: 6,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseAmount(state) {
      state.amount = state.amount + 1;
    },
    decreaseAmount(state) {
      state.amount = state.amount - 1;
    },
  },
});

export default cartSlice;
