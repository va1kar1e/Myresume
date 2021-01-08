<template>
  <v-col cols="6" class="text-left resume-right">
    <Education />
    <Cert />
    <Course />
    <Interest />
  </v-col>
</template>

<script>
import Education from "./Rightside/Education.vue";
import Cert from "./Rightside/Cert.vue";
import Course from "./Rightside/Course.vue";
import Interest from "./Rightside/Interest.vue";

export default {
  name: "ResumeLeftSide",
  components: {
    Education,
    Cert,
    Course,
    Interest,
  }
};
</script>
