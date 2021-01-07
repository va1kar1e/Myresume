<template>
  <v-col cols="12" md="6" lg="6">
    <Course />
    <Interest />
  </v-col>
</template>

<script lang="ts">
import Course from "./components/Course.vue";
import Interest from "./components/Interest.vue";

export default {
  name: "CourseInterest",
  components: {
    Course,
    Interest
  },
};
</script>
