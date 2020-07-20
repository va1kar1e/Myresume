<template>
  <v-app>
    <Navbar />
    <v-content>
      <Header />
      <v-container>
        <v-row class="text-center">
          <Aboutme />
          <Education />
          <Work />
          <Recognition />
          <Cert />
          <Course />
          <Interest />
        </v-row>
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/resume/general/Navbar.vue";
import Footer from "@/components/resume/general/Footer.vue";
import Header from "@/components/resume/Header.vue";
import Aboutme from "@/components/resume/aboutme/Aboutme.vue";
import Education from "@/components/resume/education/Education.vue";
import Work from "@/components/resume/work/Work.vue";
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
    Header,
    Aboutme,
    Education,
    Work,
    Recognition,
    Cert,
    Course,
    Interest,
    Footer,
  },
};
</script>
