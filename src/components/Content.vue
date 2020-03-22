<template>
  <v-container>
    <v-row class="text-center">
      <Aboutme />
      <Work />
      <Section4 />
      <Section5 />
      <Recognition />
      <Projects />
    </v-row>
  </v-container>
</template>

<script>
import Aboutme from "@/components/Aboutme.vue";
import Work from "@/components/Work.vue";
import Section4 from "@/components/Section4.vue";
import Section5 from "@/components/Section5.vue";
import Recognition from "@/components/Recognition.vue";
import Projects from "@/components/Projects.vue";

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
    Section5,
    Recognition,
    Projects
  }
};
</script>
