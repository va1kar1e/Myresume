<template>
  <v-col class="mb-1" cols="12" md="6" lg="6">
    <h2 class="display-1 font-weight-bold mb-9 text-uppercase">Interested</h2>
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
      ["primary","Data Visualization"],
      ["primary","Data Analytic"],
      ["primary","VueJS"],
      ["primary","ReactJS"],
      ["primary","NodeJS"],
      ["primary","MongoDB"],
      ["primary","Python"],
      ["primary","Ruby"],
      ["primary","Go"],
      ["primary","Javascript"],
      ["primary","Internet Of Thing"],
      ["primary","Writing Academic Paper"],
      ["primary","Research"],
      ["primary","Photographic"],
      ["primary","Photo and Video Editing"]
    ]
  })
};
</script>

