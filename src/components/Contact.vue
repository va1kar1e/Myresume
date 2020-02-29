<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-1" cols="12">
        <h2 class="display-1 font-weight-bold mb-3 hidden-md-and-up">
          Contact
        </h2>

        <v-row justify="center" class="contact-content hidden-md-and-up">
          <div class="heading mx-3 font-weight-bold">
            <v-btn text color="primary" href="mailto:siwanont1@gmail.com" target="_blank">siwanont1@gmail.com</v-btn>
            <v-icon small color="primary lighten-1">far fa-envelope</v-icon>
          </div>
          <div class="heading mx-3 font-weight-bold">
            <v-btn text color="primary">(+66)92-686-8855</v-btn>
            <v-icon small color="primary lighten-1">fas fa-mobile-alt</v-icon>
          </div>
          <div class="heading mx-3 font-weight-bold">
            <v-btn text color="primary" href="https://linkedin.com/in/siwanont" target="_blank">linkedin.com/in/siwanont</v-btn>
            <v-icon small color="primary lighten-1">fab fa-linkedin</v-icon>
          </div>
          <div class="heading mx-3 font-weight-bold">
            <v-btn text color="primary" href="https://github.com/booktay" target="_blank">github.com/booktay</v-btn>
            <v-icon small color="primary lighten-1">fab fa-github</v-icon>
          </div>
          <div class="heading mx-3 font-weight-bold">
            <v-btn text color="primary">Thai(Native)/English</v-btn>
            <v-icon small color="primary lighten-1">fas fa-language</v-icon>
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
