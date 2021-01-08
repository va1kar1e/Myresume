<template>
  <v-footer app>
    <v-col class="py-2" cols="12" md="12">
      <div class="mb-3" />
      <v-row justify="center" class="mb-5">
        <v-btn text color="primary" to="/c/linkedin" target="_blank">
          <v-icon color="white">fab fa-linkedin</v-icon>
        </v-btn>
        <v-btn href="mailto:siwanont1@gmail.com" text target="_blank">
          <v-icon color="white">fas fa-paper-plane</v-icon>
        </v-btn>
        <v-btn text color="primary" to="/c/github" target="_blank">
          <v-icon color="white">fab fa-github</v-icon>
        </v-btn>
      </v-row>
      <v-row justify="center" class="mb-1">
        <p class="caption font-weight-light text-center">
          Copyright@{{ new Date().getFullYear() }}, Designed by Siwanont
          Sittinam with <a href="https://vuejs.org/">Vue.JS</a>
        </p>
      </v-row>
    </v-col>
  </v-footer>
</template>

<style scoped>
.caption {
  margin-bottom: 0px !important;
}
</style>

<script>
export default {
  name: "ProfileFooter",
}
</script>
