<template>
  <v-row>
    <Section1 />
    <Section2 />
  </v-row>
</template>

<script>
import Section1 from "./Header/Section1.vue"
import Section2 from "./Header/Section2.vue"

export default {
  name: "ResumeHeader",
  components: {
    Section1,
    Section2,
  }
};
</script>
