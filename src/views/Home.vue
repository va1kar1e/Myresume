<template>
  <v-app>
    <Navbar />
    <v-content>
      <HelloWorld />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  data() {
    return {
      title: "Home"
    };
  },
  components: {
    Navbar,
    HelloWorld,
    Footer
  }
};
</script>
