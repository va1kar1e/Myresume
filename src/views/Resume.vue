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
          <Extra />
          <SkillInterest />
        </v-row>
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/resume/Navbar.vue";
import Footer from "@/components/resume/Footer.vue";
import Header from "@/components/resume/Header.vue";
import Aboutme from "@/components/resume/Aboutme.vue";
import Work from "@/components/resume/Work.vue";
import Education from "@/components/resume/Education.vue";
import Extra from "@/components/resume/Extra.vue";
import SkillInterest from "@/components/resume/SkillInterest.vue";

export default {
  data() {
    return {
      title: "Resume"
    };
  },
  components: {
    Navbar,
    Header,
    Aboutme,
    Work,
    Education,
    Extra,
    SkillInterest,
    Footer
  }
};
</script>
