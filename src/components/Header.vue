<template>
  <v-container>
    <v-row class="d-flex text-center">
      <v-col cols="12">
        <v-img
          :src="require('@/assets/images/profilepic.png')"
          class="my-3"
          contain
          min-height="100"
          max-height="450"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="black" />
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col class="mb-1">
        <h1 class="display-2 font-weight-bold mb-1">
          SIWANONT SITTINAM
        </h1>
        <p class="display-1 font-weight-regular">
          Computer Engineer
        </p>
      </v-col>
    </v-row>
    <v-row justify="center" class="mb-2">
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
  </v-container>
</template>

<script lang="ts">
export default {
  name: "Header"
};
</script>
