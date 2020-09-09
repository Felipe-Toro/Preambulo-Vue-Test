<template>
  <div style="min-width:320px; right:0; left:auto" aria-labelledby="triggerId">
    <div v-for="item in cart" :key="item.product.produtos">
      <div>
        <div class="row">
          <strong class="col">{{ item.product.titulo }}</strong>
          <div>
            <q-btn padding="none" round color="primary" icon="remove_circle" />
          </div>
        </div>
        {{ item.quantity }} x R${{ item.product.preco }}
      </div>
    </div>

    <hr />
    <div class="row">
      <span class="col">Total: $23</span>
      <div>
        <q-btn padding="none" round color="primary" icon="delete" />
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
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    }
  }
};
</script>

<style></style>
