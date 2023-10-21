import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      //check if item exist in cart
      const existItem = state.cartItems.find((x) => x._id === item._id);

      if (existItem) {
        state.cartItems = state.cartItems.map((x) => x_id === existItem._id)
          ? item
          : x;
      } else {
        //pushing alternative
        state.cartItems = [...state.cartItems, item];
      }

      //item price
      state.itemPrice = addDecimals(
        state.cartItems
          .reduce((acc, item) => acc + item.price * item.qty, 0)
          .toFixed(2)
      );
      //shipping price
      state.shippingPrice = addDecimals(state.itemPrice > 100 ? 0 : 10);
      //tax price
      state.taxPrice = addDecimals(Number((0.5 * state.itemPrice).toFixed(2)));
      //total price
      state.totalPrice = (
        Number(itemPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
      ).toFixed(2);

      //storing to local storage
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

//export with actions
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
