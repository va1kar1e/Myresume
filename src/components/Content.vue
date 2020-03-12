<template>
  <v-container>
    <v-row class="text-center">
      <Aboutme />
      <Work />
      <RecSkilInt />
    </v-row>
  </v-container>
</template>

<script>
import Aboutme from "@/components/Aboutme.vue";
import Work from "@/components/Work.vue";
import RecSkilInt from "@/components/RecSkilInt.vue";

export default {
  data() {
    return {
      title: "Content"
    };
  },
  components: {
    Aboutme,
    Work,
    RecSkilInt
  }
};
</script>
