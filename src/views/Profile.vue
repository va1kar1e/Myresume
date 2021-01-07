<template>
  <v-app>
    <Navbar />
    <v-main>
      <Header />
      <Aboutme />
      <Education />
      <Work />
      <!-- <v-container>
        <Cert />
        <v-row>
          <Recognition />
          <CourseInterest />
        </v-row>
      </v-container> -->
    </v-main>
    <Footer />
  </v-app>
</template>

<style lang="scss">
@import "@/styles/profile.scss";
</style>

<script>
import Navbar from "@/components/profile/Navbar.vue";
import Header from "@/components/profile/Header.vue";
import Footer from "@/components/profile/Footer.vue";
import Aboutme from "@/components/profile/Aboutme.vue";
import Education from "@/components/profile/education/Education.vue";
import Work from "@/components/profile/Work.vue";
// import Cert from "@/components/profile/Cert.vue";
// import Recognition from "@/components/profile/Recognition.vue";
// import CourseInterest from "@/components/profile/CourseInterest.vue";

export default {
  data() {
    return {
      title: "Profile",
    };
  },
  components: {
    Navbar,
    Footer,
    Header,
    Aboutme,
    Education,
    Work,
    // Cert,
    // Recognition,
    // CourseInterest
  },
};
</script>
