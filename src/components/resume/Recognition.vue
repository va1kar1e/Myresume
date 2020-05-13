<template>
  <v-col class="mb-1" cols="12">
    <h2 class="display-1 font-weight-bold mb-5 text-uppercase">Recognition</h2>
    <v-row justify="center">
      <v-col v-for="(item, i) in items" :key="i" class="mb-1" cols="12" md="6" lg="6">
        <h2 :class="`headline font-weight-light mb-4 ${item.color}--text`">{{ item.what }}</h2>
        <p class=".subtitle-2 font-weight-light">{{ item.where }}</p>
        <p class=".subtitle-2 font-weight-light">{{ item.who }}</p>
      </v-col>
    </v-row>
  </v-col>
</template>

<script lang="ts">
export default {
  name: "Recognition",
  data: () => ({
    dialog: false,
    items: [
      {
        color: "blue",
        what: "CONSOLATION PRIZE AWARD",
        where: "Huawei ICT Completition 2019",
        who: "Huawei Technologies (Thailand)"
      },
      {
        color: "blue",
        what: "CREATIVE DESIGN AWARD",
        where: "Financial Cybersecurity 2017",
        who: "Securities and Exchange Commission of Thailand"
      }
    ]
  })
};
</script>







