<template>
  <v-row justify="center">
    <Extra />
    <SkillInterest />
  </v-row>
</template>

<script lang="ts">
import Extra from "@/components/Extra.vue";
import SkillInterest from "@/components/SkillInterest.vue";
export default {
  name: "Section3",
  components: {
    Extra,
    SkillInterest,
  }
};
</script>
