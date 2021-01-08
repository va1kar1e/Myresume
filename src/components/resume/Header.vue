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
    <Line />
  </div>
</template>

<script>
import Line from "@/components/resume/components/line.vue";

export default {
  data() {
    return {
      title: "Header"
    };
  },
  components: {
    Line,
  }
};
</script>
