<template>
  <v-app>
    <v-main class="resume">
      <v-container>
        <v-sheet
          color="white"
          elevation="0"
          class="a4-paper"
        >
          <Header />
          <v-row class="d-flex text-center">
            <Leftside />
            <Rightside />
          </v-row>
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="scss">
@import "@/styles/resume.scss";
</style>

<script>
import Header from "@/components/resume/Header.vue"
import Leftside from "@/components/resume/Leftside.vue"
import Rightside from "@/components/resume/Rightside.vue"

export default {
  data() {
    return {
      title: "Resume"
    };
  },
  components: {
    Header,
    Leftside,
    Rightside
  }
};
</script>
