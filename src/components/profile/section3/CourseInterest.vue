<template>
  <v-col cols="12" md="6" lg="6">
    <div class="mb-5">
      <h2 class="display-1 font-weight-bold mb-5 text-uppercase text-center">
        Extracuricular Courses
      </h2>
      <v-row justify="center">
        <v-chip
          :ripple="false"
          v-for="(item, i) in citems"
          :key="i"
          class="ma-1 font-weight-bold"
          color="#ffffff"
          outlined
          >{{ item[1] }}</v-chip
        >
      </v-row>
    </div>
    <div class="mb-5">
      <h2 class="display-1 font-weight-bold mb-5 text-uppercase text-center">
        Interests
      </h2>
      <v-row justify="center">
        <v-chip
          :ripple="false"
          v-for="(item, i) in iitems"
          :key="i"
          class="ma-1 font-weight-bold"
          color="#ffffff"
          outlined
        >
          {{ item[1] }}
        </v-chip>
      </v-row>
    </div>
  </v-col>
</template>

<script lang="ts">
import info from "@/assets/info.json";

export default {
  name: "CourseInterest",
  data: () => ({
    citems: info.course.items,
    iitems: info.interest.items
  }),
};
</script>
