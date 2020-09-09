<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <router-link
            style="text-decoration: none; color: inherit;"
            to="/"
            class="nav-tem nav-link active"
          >
            <strong>Tech Shop</strong>
          </router-link>
        </q-toolbar-title>
        <div>
          <q-btn-dropdown push color="primary" label="Cart">
            <q-list>
              <q-item @click="$event.stopPropagation()">
                <mini-cart></mini-cart>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { addProductToCart } from "src/store/app/actions";
import Product from "../pages/Product";
import MiniCart from "../components/MiniCart";
export default {
  components: { MiniCart },
  name: "MainLayout",
  methods: {
    removeFromCart(itemCart) {
      this.$store.dispatch("app/removeFromCart", itemCart);
    },
    addProductToCart(itemCart) {
      this.$store.dispatch("app/addProductToCart", itemCart);
    }
  }
};
</script>
