export function ADD_TO_CART(state, produto) {
  state.cart.push(produto);
}

export function DECREASE_CART_ITEM(state, productTitulo) {
  for (let cartItem of state.cart) {
    console.log(productTitulo, cartItem.titulo);
    if (productTitulo === cartItem.titulo) {
      cartItem.quantidade -= 1;
      return;
    }
  }
}

export function INCREASE_CART_ITEM(state, productTitulo) {
  for (let cartItem of state.cart) {
    if (productTitulo === cartItem.titulo) {
      cartItem.quantidade += 1;
      return;
    }
  }
}

export function REMOVE_FROM_CART(state, productTitulo) {
  for (let index in state.cart) {
    if (state.cart[index].titulo === productTitulo) {
      state.cart.splice(index, 1);
    }
  }
}

export function CLEAR_CART(state) {
  state.cart.splice(0);
}
