<template>
  <v-app>
    <Navbar />
    <v-content>
      <Header />
      <v-container>
        <v-row class="text-center">
          <Aboutme />
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
    Footer
  }
};
</script>
