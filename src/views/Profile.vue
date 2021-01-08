<template>
  <v-app>
    <Navbar />
    <v-main class="profile">
      <Section1 />
      <Section2 />
      <Section3 />
    </v-main>
    <Footer />
  </v-app>
</template>

<style lang="scss">
@import "@/styles/profile.scss";
</style>

<script>
import Navbar from "@/components/profile/components/Navbar.vue";
import Footer from "@/components/profile/components/Footer.vue";
import Section1 from "@/components/profile/Section1.vue"
import Section2 from "@/components/profile/Section2.vue"
import Section3 from "@/components/profile/Section3.vue"

export default {
  name: "Profile",
  components: {
    Navbar,
    Footer,
    Section1,
    Section2,
    Section3
  },
};
</script>
