<template>
  <div class="q-pa-xm">
    <div class="text-left q-mb-xs q-pt-sm q-ml-sm">
      <q-btn
        flat
        icon="mdi-filter-variant"
        label="filtrar"
        class=" text-grey-7"
      >
        <q-menu>
          <q-option-group
            v-model="filtro"
            :options="[
              { label: 'Eletrodoméstico', value: 'eletro' },
              { label: 'Utilidade', value: 'utilidade' }
            ]"
            color="primary"
            class="q-pa-md "
            type="checkbox"
          ></q-option-group>
        </q-menu>
      </q-btn>
      <q-btn class="q-ml-md text-grey-7" flat icon="mdi-sort" label="ordenar">
        <q-menu>
          <q-option-group
            v-model="ordenar"
            :options="[
              { label: 'Ordem alfabética', value: 'alfa' },
              { label: 'Maior preço', value: 'maiorPreco' },
              { label: 'Menor preço', value: 'menorPreco' }
            ]"
            color="primary"
            class="q-pa-md"
            type="radio"
          >
          </q-option-group>
        </q-menu>
      </q-btn>
    </div>
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

  data() {
    return {
      filtro: ["eletro", "utilidade"],
      ordenar: "alfa"
    };
  },
  computed: {
    ...mapGetters("app", ["precoTotal"]),
    ...mapState("app", ["produtos"]),
    showProducts() {
      let array = [...this.produtos];

      array = array.filter(item => {
        return this.filtro.indexOf(item.categoria) > -1;
      });

      array.sort((itemA, itemB) => {
        if (this.ordenar === "alfa")
          return itemA.titulo > itemB.titulo ? 1 : -1;
        if (this.ordenar === "maiorPreco")
          return parseFloat(itemA.preco) < parseFloat(itemB.preco) ? 1 : -1;
        if (this.ordenar === "menorPreco")
          return parseFloat(itemA.preco) > parseFloat(itemB.preco) ? 1 : -1;
        return 1;
      });
      //Calculos para mostra de produtos
      return array;
    }
  }
};
</script>

<style></style>
