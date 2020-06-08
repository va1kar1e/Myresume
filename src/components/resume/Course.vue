<template>
  <v-col class="mb-1" cols="12" md="6" lg="6">
    <h2 class="display-1 font-weight-bold mb-5 text-uppercase">Extracuricular Course</h2>
    <h2 v-for="(c, i) in item.course" :key="i" 
      :class="`title font-weight-bold mb-2 text-uppercase primary--text`"
    >{{ c }}</h2>
  </v-col>
</template>

<script lang="ts">
export default {
  name: "Course",
  data: () => ({
    item: {
      color: "primary",
      course: [
        "CompTIA Security+",
        "CCNA: Routing & Switching",
        "CCNA: Intro to Cybersecurity",
        "Cybersecurity & Penetration (OWASP)"
      ]
    }
  })
};
</script>
