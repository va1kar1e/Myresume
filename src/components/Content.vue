<template>
  <v-container>
    <v-row class="text-center">
      <Aboutme />
      <Work />
    </v-row>
  </v-container>
</template>

<script>
import Aboutme from "@/components/Aboutme.vue";
import Work from "@/components/Work.vue";

export default {
  data() {
    return {
      title: "Content"
    };
  },
  components: {
    Aboutme,
    Work
  }
};
</script>
