<template>
  <div class="q-pa-lg row items-start q-gutter-md">
    <product-card
      v-for="product of products"
      :key="product.titulo"
      :product="product"
    ></product-card>
  </div>
</template>

<script>
import ProductCard from "./ProductCard";
export default {
  components: {
    ProductCard
  },

  props: ["products"]
};
</script>

<style></style>
