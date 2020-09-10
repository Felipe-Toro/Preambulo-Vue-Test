import dados from "../../dados.json";

export default function() {
  return {
    produtos: dados.produtos,
    cart: []
  };
}
