<template>
  <v-app>
    <Navbar />
    <v-main>
      <Header />
      <Aboutme />
      <Education />
      <Work />
      <v-container>
        <v-row>
          <Recognition />
          <Cert />
          <Course />
          <Interest />
        </v-row>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<style lang="scss">
@import "@/styles/resume.scss";
</style>

<script>
import Navbar from "@/components/resume/Navbar.vue";
import Footer from "@/components/resume/Footer.vue";
import Header from "@/components/resume/Header.vue";
import Aboutme from "@/components/resume/Aboutme.vue";
import Education from "@/components/resume/education/Education.vue";
import Work from "@/components/resume/Work.vue";
import Recognition from "@/components/resume/Recognition.vue";
import Cert from "@/components/resume/Cert.vue";
import Course from "@/components/resume/Course.vue";
import Interest from "@/components/resume/Interest.vue";

export default {
  data() {
    return {
      title: "Resume",
    };
  },
  components: {
    Navbar,
    Footer,
    Header,
    Aboutme,
    Education,
    Work,
    Recognition,
    Cert,
    Course,
    Interest,
  },
};
</script>
