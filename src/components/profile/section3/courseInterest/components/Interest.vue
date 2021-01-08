<template>
  <div class="mb-5">
    <h2 class="display-1 font-weight-bold mb-5 text-uppercase text-center">
      Interests
    </h2>
    <v-row justify="center">
      <v-chip
        :ripple="false"
        v-for="(item, i) in items"
        :key="i"
        class="ma-1 font-weight-bold"
        color="#ffffff"
        outlined
      >
        {{ item[1] }}
      </v-chip>
    </v-row>
  </div>
</template>

<script lang="ts">
import info from "@/assets/info.json";

export default {
  name: "ProfileInterest",
  data: () => ({
    items: info.interest.items
  }),
};
</script>
