<template>
  <v-col cols="12" md="6" lg="6">
    <Course />
    <br />
    <Interest />
  </v-col>
</template>

<script lang="ts">
import Course from "./CourseInterest/Course.vue";
import Interest from "./CourseInterest/Interest.vue";

export default {
  name: "ProfileSection3CourseInterest",
  components: {
    Course,
    Interest
  },
};
</script>
