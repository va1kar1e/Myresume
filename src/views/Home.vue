<template>
  <v-app>
    <Navbar />
    <v-content>
      <Header />
      <Content />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import Content from "@/components/Content.vue";

export default {
  data() {
    return {
      title: "Home"
    };
  },
  components: {
    Navbar,
    Header,
    Content,
    Footer
  }
};
</script>
