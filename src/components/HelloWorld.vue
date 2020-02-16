<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('@/assets/images/profilepic.png')"
          class="my-3"
          contain
          height="300"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          SIWANONT SITTINAM
        </h1>

        <p class="display-1 font-weight-regular">
          Network Engineer
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="display-1 font-weight-bold mb-3 hidden-md-and-up">
          Contact
        </h2>

        <v-row justify="center" class="contact-content hidden-md-and-up">
          <div class="heading mx-3 font-weight-bold">
            <a href="mailto:siwanont1@gmail.com" target="_blank">SIWANONT1@GMAIL.COM</a>
            <v-icon large color="primary lighten-1">far fa-envelope</v-icon>
          </div>
          <div class="heading mx-3 font-weight-bold">
            <a>(+66)92-686-8855</a>
            <v-icon large color="primary lighten-1">fas fa-mobile-alt</v-icon>
          </div>
          <div class="heading mx-3 font-weight-bold">
            <a href="https://linkedin.com/in/siwanont" target="_blank">
              https://linkedin.com/in/siwanont
            </a>
            <v-icon large color="primary lighten-1">
              fab fa-linkedin
            </v-icon>
          </div>
          <div class="heading mx-3 font-weight-bold">
            <a href="https://github.com/booktay" target="_blank">
              https://github.com/booktay
            </a>
            <v-icon large color="primary lighten-1">
              fab fa-github
            </v-icon>
          </div>
          <div class="heading mx-3 font-weight-bold">
            <a>Thai(Native)/English</a>
            <v-icon large color="primary lighten-1">fas fa-language</v-icon>
          </div>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.contact-content {
  display: grid;
  text-align: right;
}
</style>

<script lang="ts">
export default {
  name: "Header"
};
</script>
