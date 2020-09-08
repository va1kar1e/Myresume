<template>
  <v-container>
    <v-parallax
      src=""
    >
      <v-row class="d-flex text-center">
      <v-col cols="12" md="12">
        <v-img
          :src="require('@/assets/images/profilepic.png')"
          class="my-3"
          contain
          min-height="80"
          max-height="300"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="black" />
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col class="mb-1 black--text" cols="12" md="12">
        <h1 class="display-2 font-weight-bold mb-1">SIWANONT SITTINAM</h1>
        <!-- <p class="display-1 font-weight-regular">Security Engineer</p> -->
      </v-col>
    </v-row>
    <v-row justify="center" class="mb-2">
      <v-row justify="center" class="mb-1">
        <v-btn text color="primary" to="/c/linkedin" target="_blank">
          <v-icon large color="grey darken-4">fab fa-linkedin</v-icon>
        </v-btn>
        <v-btn href="mailto:siwanont1@gmail.com" text color="black" target="_blank">
          <v-icon large color="grey darken-4">fas fa-paper-plane</v-icon>
        </v-btn>
        <v-btn text color="primary" to="/c/github" target="_blank">
          <v-icon large color="grey darken-4">fab fa-github</v-icon>
        </v-btn>
      </v-row>
    </v-row>
    </v-parallax>
  </v-container>
</template>
