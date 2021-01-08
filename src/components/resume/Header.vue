<template>
  <div class="resume-header">
    <v-row class="d-flex text-center">
      <v-col cols="5" class="red">
        <h1 class="display-2 font-weight-bold mb-5 text-uppercase text-center">
          Header Section1
        </h1>
      </v-col>
      <v-col cols="3" class="green">
        <h1 class="display-2 font-weight-bold mb-5 text-uppercase text-center">
          Header Section2
        </h1>
      </v-col>
      <v-col cols="4" class="blue">
        <h1 class="display-2 font-weight-bold mb-5 text-uppercase text-center">
          Header Section3
        </h1>
      </v-col>
    </v-row>
    <v-row class="d-flex text-center">
      <v-col cols="12">
        <div class="horizontal-line"></div>
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: "Header"
    };
  },
  components: {
  }
};
</script>
