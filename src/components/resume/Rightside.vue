<template>
  <v-col cols="6" class="text-left resume-right">
    <Education />
    <Cert />
  </v-col>
</template>

<script>
import Education from "./Rightside/Education.vue";
import Cert from "./Rightside/Cert.vue";

export default {
  name: "ResumeLeftSide",
  components: {
    Education,
    Cert,
  }
};
</script>
