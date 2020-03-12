<template>
  <v-row justify="center">
    <Recognition />
    <v-col class="mb-1" cols="12" md="6" lg="6">
      <Skill />
      <Interest />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Recognition from "@/components/Recognition.vue";
import Skill from "@/components/Skill.vue";
import Interest from "@/components/Interest.vue";
export default {
  name: "RecSkilInt",
  components: {
    Recognition,
    Skill,
    Interest,
  }
};
</script>
