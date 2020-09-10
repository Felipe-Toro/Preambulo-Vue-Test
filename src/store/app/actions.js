export function addToCart(context, produto) {
  if (produto) {
    for (let cartItem of context.state.cart) {
      if (cartItem.titulo === produto.titulo) {
        context.commit("INCREASE_CART_ITEM", produto.titulo);
        return;
      }
    }
    context.commit("ADD_TO_CART", { ...produto, quantidade: 1 });
    return;
  }
}

export function removeFromCart(context, produto) {
  if (produto) {
    for (let cartItem of context.state.cart) {
      if (cartItem.titulo === produto.titulo) {
        if (cartItem.quantidade === 1) {
          context.commit("REMOVE_FROM_CART", produto.titulo);
        } else {
          context.commit("DECREASE_CART_ITEM", produto.titulo);
        }
        return;
      }
    }
  }
}

export function clearCart(context) {
  context.commit("CLEAR_CART");
}
