import dados from "../../dados.json";

export default function() {
  return {
    products: dados.produtos,
    cart: []
  };
}
