<template>
  <v-app>
    <Navbar />
    <v-main>
      <Header />
      <Aboutme />
      <Education />
      <Work />
      <v-container>
        <Recognition />
        <Cert />
        <v-row>
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
import Navbar from "@/components/resumeweb/Navbar.vue";
import Header from "@/components/resumeweb/Header.vue";
import Footer from "@/components/resumeweb/Footer.vue";
import Aboutme from "@/components/resumeweb/Aboutme.vue";
import Education from "@/components/resumeweb/education/Education.vue";
import Work from "@/components/resumeweb/Work.vue";
import Recognition from "@/components/resumeweb/Recognition.vue";
import Cert from "@/components/resumeweb/Cert.vue";
import Course from "@/components/resumeweb/Course.vue";
import Interest from "@/components/resumeweb/Interest.vue";

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
