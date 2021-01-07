<template>
  <v-app-bar app>
    <div class="d-flex align-center">
      <v-img
        class="shrink mr-2"
        contain
        :src="require('@/assets/images/logo.png')"
        transition="scale-transition"
        width="40"
      />
      <v-toolbar-title class="shrink mt-1 font-weight-bold" contain
        >Siwanont.ml</v-toolbar-title
      >
    </div>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<style scoped>
.v-app-bar {
  background-color: #263859 !important;
}
.v-sheet {
  background-color: #263859 !important;
}
</style>

<script>

export default {
  data() {
    return {
      dialog: false,
    };
  },
  components: {
  },
};
</script>
