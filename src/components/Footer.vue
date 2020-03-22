<template>
  <v-footer padless>
    <v-row class="justify-center grey lighten-5" no-gutters>
      <v-col class="py-4 text-center grey lighten-4" cols="12">
        <v-btn
          to="/resume"
          target="_blank"
          text
          rounded
          class="mb-4"
        >
          Download My Resume
        </v-btn>
        <v-row justify="center" class="mb-8">
          <v-btn
            text
            color="primary"
            href="mailto:siwanont1@gmail.com"
            target="_blank"
          >
            <v-icon large color="grey darken-4">far fa-envelope</v-icon>
          </v-btn>
          <v-btn text color="primary" to="/linkedin" target="_blank">
            <v-icon large color="grey darken-4">fab fa-linkedin</v-icon>
          </v-btn>
          <v-btn text color="primary" to="/github" target="_blank">
            <v-icon large color="grey darken-4">fab fa-github</v-icon>
          </v-btn>
          <v-btn text color="primary" to="/facebook" target="_blank">
            <v-icon large color="grey darken-4">fab fa-facebook-square</v-icon>
          </v-btn>
        </v-row>
        <p class="caption font-weight-light">
          Copyright @ {{ new Date().getFullYear() }} | Designed by Siwanont Sittinam
        </p>
      </v-col>
    </v-row>
  </v-footer>
</template>
