<template>
  <div class="q-pl-xl q-pa-xl q-gutter-xl row">
    <div class="col-3 q-pl-xl">
      <img :src="'imgs/' + $route.params.img" alt="" width="350" height="400" />
    </div>
    <div class="col-6">
      <strong class="text-h4">
        Titulo
      </strong>
      <div class="text-subtitle2">
        Categoria
      </div>
      <div class="q-mt-lg text">
        <p>Breve descrição.</p>
      </div>
      <div class="text-h6">
        <strong>R$</strong>
      </div>

      <br />
      <q-btn class="q-mt-lg" push color="primary">Add to cart</q-btn>
    </div>
  </div>
</template>

<script>
export default {
  params: "product"
};
</script>

<style></style>
