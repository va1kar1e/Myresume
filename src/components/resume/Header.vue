<template>
  <div class="resume-header">
    <v-row class="d-flex">
      <Section1 />
      <Section2 />
      <Section3 />
    </v-row>
    <div class="horizontal-line"></div>
  </div>
</template>

<script>
import Section1 from "./Header/Section1.vue"
import Section2 from "./Header/Section2.vue"
import Section3 from "./Header/Section3.vue"

export default {
  name: "ResumeHeader",
  components: {
    Section1,
    Section2,
    Section3,
  }
};
</script>
