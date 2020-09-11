<template>
  <div class="row items-start q-gutter-md">
    <product-card
      v-for="produto of produtos"
      :key="produto.titulo"
      :produto="produto"
    ></product-card>
  </div>
</template>

<script>
import ProductCard from "./ProductCard";
export default {
  components: {
    ProductCard
  },

  props: ["produtos"]
};
</script>

<style></style>
