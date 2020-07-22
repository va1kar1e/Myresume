<template>
  <v-col class="mb-1" cols="12">
    <h2 class="display-1 font-weight-bold mb-5 text-uppercase">Work Experience</h2>
    <v-row justify="center">
      <v-col class="mb-1" cols="12">
        <v-timeline :dense="$vuetify.breakpoint.mdAndDown">
          <Refinitiv />
          <Pantip />
        </v-timeline>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import Refinitiv from "./components/Refinitiv.vue";
import Pantip from "./components/Pantip.vue";

export default {
  name: "Work",
  components: {
    Refinitiv,
    Pantip
  }
};
</script>
