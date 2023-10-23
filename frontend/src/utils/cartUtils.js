export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
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
    Number(state.itemPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2);

  //storing to local storage
  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};
