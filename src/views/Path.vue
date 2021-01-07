<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container>
        <v-row class="d-flex text-center">
          <v-col cols="12">
            <h1 class="display-2 font-weight-bold mb-5 text-uppercase text-center">
              Path
            </h1>
            <Construction />
          </v-col>
        </v-row> 
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/path/Navbar.vue";
import Construction from "@/components/general/construction.vue"

export default {
  data() {
    return {
      title: "Path"
    };
  },
  components: {
    Navbar,
    Construction
  }
};
</script>
