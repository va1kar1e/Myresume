<template>
  <v-container>
    <v-row class="text-center">
      <Aboutme />
      <Work />
      <Section4 />
      <Recognition />
      <Section5 />
      <!-- <Projects /> -->
    </v-row>
  </v-container>
</template>

<script>
import Aboutme from "@/components/Aboutme.vue";
import Work from "@/components/Work.vue";
import Section4 from "@/components/Section4.vue";
import Recognition from "@/components/Recognition.vue";
import Section5 from "@/components/Section5.vue";
// import Projects from "@/components/Projects.vue";

export default {
  data() {
    return {
      title: "Content"
    };
  },
  components: {
    Aboutme,
    Work,
    Section4,
    Recognition,
    Section5,
    // Projects
  }
};
</script>
