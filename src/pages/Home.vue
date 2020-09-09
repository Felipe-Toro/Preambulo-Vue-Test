<template>
  <div>
    <product-list :products="showProducts"> </product-list>
  </div>
</template>

<script>
import ProductList from "../components/ProductList";
import { mapState } from "vuex";

export default {
  components: {
    ProductList
  },
  computed: {
    ...mapState("app", ["products"]),
    showProducts() {
      //Calculos para mostra de produtos
      return this.products;
    }
  },
  mounted() {
    console.log(this.$store);
  }
};
</script>

<style></style>
