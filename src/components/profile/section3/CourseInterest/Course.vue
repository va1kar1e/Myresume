<template>
  <div class="mb-5">
    <h2 class="display-1 font-weight-bold mb-5 text-uppercase text-center">
      Extracurricular Courses
    </h2>
    <v-row justify="center">
      <v-chip
        :ripple="false"
        v-for="(item, i) in items"
        :key="i"
        class="ma-1 font-weight-bold"
        color="#ffffff"
        outlined
        >{{ item }}</v-chip
      >
    </v-row>
  </div>
</template>

<script lang="ts">
import info from "@/assets/info.json";

export default {
  name: "ProfileSection3CourseInterestCourse",
  data: () => ({
    items: info.course.items
  }),
};
</script>
