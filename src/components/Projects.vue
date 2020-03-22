<template>
  <v-col class="mb-1" cols="12">
    <h2 class="display-1 font-weight-bold mb-9 text-uppercase">Projects</h2>
    <v-chip
      :ripple="false"
      v-for="(item, i) in items"
      :key="i"
      class="ma-1"
      :color="item[0]"
      outlined
    >
      {{ item[1] }}
    </v-chip>
  </v-col>
</template>

<script lang="ts">
export default {
  name: "SkillInterest",
  data: () => ({
    dialog: false,
    items: [
      ["primary","Networking"],
      ["primary","Cybersecurity"],
      ["primary","Text Analysis"],
      ["primary","Data Analytic"],
      ["primary","Data Visualization"],
      ["primary","Vue"]
    ]
  })
};
</script>

