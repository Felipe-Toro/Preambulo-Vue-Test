export const ADD_TO_CART = (state, { product, quantity }) => {
  state.cart.push({
    product,
    quantity
  });
};
