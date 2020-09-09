<template>
  <div>
    <div class="q-pa-lg row items-start q-gutter-md">
      <q-card inline style="width: 300px">
        <q-img
          :src="'imgs/' + product.img"
          style="height: 170px; max-width: 180px"
        />

        <q-card-section>
          <h4 class="text-h6">
            <router-link
              style="text-decoration: none; color: inherit;"
              :to="{ path: '/product', params: { id: 23 } }"
              >{{ product.titulo }}</router-link
            >
          </h4>
          <div class="text-subtitle2">{{ product.categoria }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          R$ {{ product.preco }}
        </q-card-section>
        <q-card-actions align="right">
          <q-btn push color="primary" @click="addToCart()">Add to cart</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],

  methods: {
    addToCart() {
      this.$store.dispatch("addProductToCart", {
        product: this.product,
        quantity: 1
      });
    }
  }
};
</script>

<style></style>
