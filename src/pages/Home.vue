<template>
  <div>
    <product-list :produtos="showProducts"> </product-list>
  </div>
</template>

<script>
import ProductList from "../components/ProductList";
import { mapGetters, mapState } from "vuex";

export default {
  components: {
    ProductList
  },
  computed: {
    ...mapGetters("app", ["precoTotal"]),
    ...mapState("app", ["produtos"]),
    showProducts() {
      //Calculos para mostra de produtos
      return this.produtos;
    }
  }
};
</script>

<style></style>
