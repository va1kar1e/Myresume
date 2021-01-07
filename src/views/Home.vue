<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container>
        <v-row class="d-flex text-center">
          <v-col cols="12">
            <h1 class="display-2 font-weight-bold mb-5 text-uppercase text-center">
              Home
            </h1>
          </v-col>
        </v-row> 
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/home/Navbar.vue";

export default {
  data() {
    return {
      title: "Home"
    };
  },
  components: {
    Navbar,
  }
};
</script>
