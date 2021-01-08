<template>
  <v-col cols="6" class="text-left resume-right">
    <Education />
  </v-col>
</template>

<script>
import Education from "./Rightside/Education.vue";

export default {
  name: "ResumeLeftSide",
  components: {
    Education,
  }
};
</script>
