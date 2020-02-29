<template>
  <v-app>
    <Navbar />
    <v-content>
      <Header />
      <!-- <Contact /> -->
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
// import Contact from "@/components/Contact.vue";

export default {
  data() {
    return {
      title: "Home"
    };
  },
  components: {
    Navbar,
    Header,
    // Contact,
    Footer
  }
};
</script>
