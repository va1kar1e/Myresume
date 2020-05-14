<template>
  <v-col class="mb-1" cols="12" md="8" lg="8">
    <h2 class="display-1 font-weight-bold mb-5 text-uppercase">Extracuricular Course</h2>
    <v-row justify="center">
      <v-col v-for="(c, i) in item.course" :key="i" class="title" cols="12" md="6" lg="6">
        <h2 :class="`headline font-weight-light mb-4 text-uppercase ${item.color}--text`">{{ c.name }}</h2>
        <p class="font-weight-light">{{ c.vender }}</p>
      </v-col>
    </v-row>
  </v-col>
</template>

<script lang="ts">
export default {
  name: "Extra",
  data: () => ({
    item: {
      color: "primary",
      course: [
        {
          name: "CCNA: Routing & Switching",
          vender: "Cisco Certified Network Associate"
        },
        {
          name: "CCNA: Intro to Cybersecurity",
          vender: "Cisco Certified Network Associate"
        },
        {
          name: "HCIA: Routing & Switching",
          vender: "Huawei Certified Network Associate"
        },
        {
          name: "Cyber Security",
          vender: "SEC Playground"
        }
      ]
    }
  })
};
</script>

