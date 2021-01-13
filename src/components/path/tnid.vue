<template>
  <v-sheet
    rounded="xl"
    class="pa-12"
    color="grey lighten-3"
    elevation="1"
  >
    <h1 class="display-2 font-weight-bold mb-5 black--text text-uppercase text-center">
      {{title}}
    </h1>
  </v-sheet>
</template>

<script>

export default {
  data() {
    return {
      title: "Thai National ID Reader",
    };
  },
  created() {
    this.$emit('childinit', this.title);
  },
  components: {
  }
};
</script>
