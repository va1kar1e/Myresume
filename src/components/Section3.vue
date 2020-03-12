<template>
  <v-row justify="center">
    <Recognition />
    <SkillInterest />
  </v-row>
</template>

<script lang="ts">
import Recognition from "@/components/Recognition.vue";
import SkillInterest from "@/components/SkillInterest.vue";
export default {
  name: "Section3",
  components: {
    Recognition,
    SkillInterest,
  }
};
</script>
