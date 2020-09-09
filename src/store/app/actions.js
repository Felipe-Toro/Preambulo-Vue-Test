export const addProductToCart = ({ commit }, { product, quantity }) => {
  commit("ADD_TO_CART", { product, quantity });
};
