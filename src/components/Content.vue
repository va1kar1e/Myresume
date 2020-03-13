<template>
  <v-container>
    <v-row class="text-center">
      <Aboutme />
      <Work />
      <Recognition />
      <Section4 />
      <Section5 />
    </v-row>
  </v-container>
</template>

<script>
import Aboutme from "@/components/Aboutme.vue";
import Work from "@/components/Work.vue";
import Recognition from "@/components/Recognition.vue";
import Section4 from "@/components/Section4.vue";
import Section5 from "@/components/Section5.vue";

export default {
  data() {
    return {
      title: "Content"
    };
  },
  components: {
    Aboutme,
    Work,
    Recognition,
    Section4,
    Section5
  }
};
</script>
