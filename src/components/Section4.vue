<template>
  <v-row justify="center">
    <Education />
    <Internship />
  </v-row>
</template>

<script lang="ts">
import Education from "@/components/Education.vue";
import Internship from "@/components/Internship.vue";
export default {
  name: "Section4",
  components: {
    Education,
    Internship
  }
};
</script>
