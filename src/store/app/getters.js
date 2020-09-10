export function precoTotal(state) {
  let sum = 0;
  for (let cartItem of state.cart) {
    sum += parseFloat(cartItem.preco) * cartItem.quantidade;
  }
  // verificar se mais do que mil reais
  if (sum > 1000) {
    sum = sum * 0.9;
  }
  return sum;
}
