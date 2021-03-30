<template>
  <v-col cols="12" md="6" lg="6">
    <h2 class="display-1 font-weight-bold mb-5 text-uppercase text-center">
      Recognitions
    </h2>
    <div justify="center" v-for="(c, i) in item.course" :key="i" >
        <h2 :class="`title font-weight-bold mb-2 text-uppercase text-center`">
          {{ c.what }}
        </h2>
        <p class="subtitle-1 text-center">{{ c.when }}</p>
    </div>
  </v-col>
</template>

<script lang="ts">
import info from "@/assets/info.json";

export default {
  name: "ProfileSection3Recogntion",
  data: () => ({
    item: info.recognition.item
  }),
};
</script>
