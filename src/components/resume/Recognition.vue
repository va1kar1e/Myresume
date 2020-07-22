<template>
  <v-col class="mb-1" cols="12" md="6" lg="6">
    <h2 class="display-1 font-weight-bold mb-5 text-uppercase">Recognitions</h2>
    <div v-for="(c, i) in item.course" :key="i" class="title">
      <h2 :class="`title font-weight-bold mb-2 text-uppercase primary--text`">{{ c.what }}</h2>
      <p class="subtitle-1 font-weight-light ">{{ c.when }}</p>
    </div>
  </v-col>
</template>

<script lang="ts">
export default {
  name: "Recogntion",
  data: () => ({
    item: {
      course: [
        {
          what: "CONSOLATION PRIZE AWARD",
          when: "Huawei ICT Competition 2019 ",
          who: "Huawei Technologies (Thailand)"
        },
        {
          what: "CREATIVE DESIGN AWARD",
          when: "Thailand Financial Cybersecurity 2017"
        }
      ]
    }
  })
};
</script>
