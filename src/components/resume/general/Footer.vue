<template>
  <v-footer padless>
    <v-col class="py-2" cols="12" md="12">
      <v-row justify="center" class="mb-2">
        <v-btn to="/d/resume" target="_blank" text>
          <v-icon color="grey darken-4">fas fa-cloud-download-alt</v-icon>
        </v-btn>
        <v-btn href="mailto:siwanont1@gmail.com" text color="black" target="_blank">
          <v-icon color="grey darken-4">fas fa-paper-plane</v-icon>
        </v-btn>
        <v-btn text color="primary" to="/c/linkedin" target="_blank">
          <v-icon color="grey darken-4">fab fa-linkedin</v-icon>
        </v-btn>
        <v-btn text color="primary" to="/c/github" target="_blank">
          <v-icon color="grey darken-4">fab fa-github</v-icon>
        </v-btn>
      </v-row>
      <v-row justify="center" class="mb-2">
        <p
          class="caption font-weight-light text-center grey lighten-4"
          style="margin-bottom: auto;"
        >Copyright@{{ new Date().getFullYear() }}, Designed by Siwanont Sittinam with <a href="https://vuejs.org/">Vue.JS</a></p>
      </v-row>
    </v-col>
  </v-footer>
</template>
