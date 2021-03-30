<template>
  <v-app>
    <div class="NotFound">
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card height="400" color="transparent" flat>
              <div class="display-3 mt-5">This page not found.</div>
              <div class="grey--text title mt-2">
                The page you are trying to get to never existed in this reality,
                or has migrated to a parallel universe.
              </div>
              <div class="headline mt-2 text-center">
                <br />
                Try going back to <a href="/" class="text-uppercase">Home page</a>
              </div>
              <br />
              <div class="horizontal-line" style="border-color:white;"></div>
              <br />
              <p class="title font-weight-light text-center">
                Copyright@{{ new Date().getFullYear() }}, Designed by Siwanont Sittinam with <a href="https://vuejs.org/">Vue.JS</a>
              </p>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </v-app>
</template>

<style>
  .paragraph-text {
    font-size: 18px;
  }
</style>

<script>
export default {
  name: "Notfound",
};
</script>
