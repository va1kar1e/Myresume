<template>
  <v-app>
    <v-main class="resume">
      <v-sheet
          color="white"
          elevation="0"
          class="a4-paper"
        >
          <Header />
          <Body />
        </v-sheet>
    </v-main>
  </v-app>
</template>

<style lang="scss">
@import "@/styles/resume.scss";
</style>

<script>
import Header from "@/components/resume/Header.vue"
import Body from "@/components/resume/Body.vue"

export default {
  name: "Resume",
  components: {
    Header,
    Body,
  }
};
</script>
