<template>
  <div
    class="fullscreen bg-primary text-white text-center q-pa-md flex flex-center"
  >
    <div>
      <div style="font-size: 30vh">
        <q-icon name="done"></q-icon>
      </div>

      <div class="text-h2" style="opacity:.4">
        Obrigado por comprar conosco.
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="primary"
        unelevated
        to="/"
        label="Tech Shop"
        no-caps
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Finish"
};
</script>

<style></style>
