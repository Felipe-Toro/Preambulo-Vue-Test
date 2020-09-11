<template>
  <div v-if="produto">
    <div class="q-pa-lg row items-start q-gutter-md">
      <q-card inline style="width: 300px">
        <div style="text-align: center">
          <q-img
            :src="'imgs/' + produto.img"
            style="height: 170px; max-width:180px; text-align:center"
          />
        </div>

        <q-card-section>
          <h4 class="text-h6">
            <router-link
              style="text-decoration: none; color: inherit;"
              :to="{ path: '/product', params: { id: 23 } }"
              >{{ produto.titulo }}</router-link
            >
          </h4>
          <div class="text-subtitle2">{{ produto.categoria }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          R$ {{ produto.preco }}
        </q-card-section>
        <q-card-actions align="right">
          <q-btn push color="primary" @click="addToCart(produto)"
            >Adicionar ao carrinho</q-btn
          >
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  props: ["produto"],

  methods: {
    addToCart(produto) {
      this.$store.dispatch("app/addToCart", produto);
    }
  }
};
</script>

<style></style>
