<template>
  <v-row class="d-flex text-center">
    <v-col cols="12">
      <h1 class="display-2 font-weight-bold mb-5 text-uppercase text-center">
        {{title}}
      </h1>
    </v-col>
  </v-row> 
</template>

<script>

export default {
  name: "TNID",
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
