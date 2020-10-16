<template>
  <v-col class="mb-5" cols="12" md="6" lg="6">
    <h2 class="display-1 font-weight-bold mb-5 text-uppercase text-center">
      Interests
    </h2>
    <v-row justify="center">
      <v-chip
        :ripple="false"
        v-for="(item, i) in items"
        :key="i"
        class="ma-1"
        color="#ffffff"
        outlined
      >
        {{ item[1] }}
      </v-chip>
    </v-row>
  </v-col>
</template>

<script lang="ts">
import info from "@/assets/info.json";

export default {
  name: "Interest",
  data: () => ({
    items: info.interest.items
  }),
};
</script>
