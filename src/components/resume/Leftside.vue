<template>
  <v-col cols="6" class="text-left resume-left">
    <Work />
  </v-col>
</template>

<script>
import Work from "./Leftside/Work.vue";

export default {
  name: "ResumeLeftSide",
  components: {
    Work,
  }
};
</script>
