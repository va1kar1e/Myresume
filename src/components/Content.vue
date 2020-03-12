<template>
  <v-container>
    <v-row class="text-center">
      <Aboutme />
      <Work />
      <Section3 />
      <Section4 />
    </v-row>
  </v-container>
</template>

<script>
import Aboutme from "@/components/Aboutme.vue";
import Work from "@/components/Work.vue";
import Section3 from "@/components/Section3.vue";
import Section4 from "@/components/Section4.vue";

export default {
  data() {
    return {
      title: "Content"
    };
  },
  components: {
    Aboutme,
    Work,
    Section3,
    Section4
  }
};
</script>
