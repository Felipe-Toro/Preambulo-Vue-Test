<template>
  <div style="min-width:320px; right:0; left:auto" aria-labelledby="triggerId">
    <div v-for="cartItem of cart" :key="cartItem.titulo">
      <div class="q-pa-md">
        <div class="row">
          <strong class="col">{{ cartItem.titulo }}</strong>
          <div>
            <q-btn
              padding="none"
              round
              color="primary"
              icon="remove_circle"
              @click="removeFromCart(cartItem)"
            />
          </div>
        </div>
        {{ cartItem.quantidade }} x R${{ cartItem.preco }}
      </div>
    </div>

    <hr />
    <div class="row q-pa-md" style="font-size: 18px">
      <strong class="col text-orange">Total: R$ {{ precoTotal }}</strong>
      <div>
        <q-btn
          padding="none"
          round
          color="primary"
          icon="delete"
          @click="clearCart()"
        />
      </div>
    </div>
    <div class="q-pt-lg">
      <router-link to="/Finish" style="text-decoration: none; color: inherit;">
        <q-btn
          color="primary"
          class="full-width"
          label="Finalizar Compra"
          no-caps
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapGetters("app", ["precoTotal"]),
    ...mapState("app", ["cart", "produtos"])
  },

  methods: {
    removeFromCart(produto) {
      this.$store.dispatch("app/removeFromCart", produto);
    },
    clearCart() {
      this.$store.dispatch("app/clearCart");
    }
  }
};
</script>

<style></style>
