<template>
  <div class="resume-header">
    <v-row class="d-flex">
      <Section1 />
      <Section2 />
      <Section3 />
    </v-row>
    <HorizontalLine />
  </div>
</template>

<script>
import info from "@/assets/info.json";
import HorizontalLine from "@/components/resume/components/HorizontalLine.vue";
import Section1 from "./Header/Section1.vue"
import Section2 from "./Header/Section2.vue"
import Section3 from "./Header/Section3.vue"

export default {
  name: "ResumeHeader",
  components: {
    HorizontalLine,
    Section1,
    Section2,
    Section3,
  }
};
</script>
