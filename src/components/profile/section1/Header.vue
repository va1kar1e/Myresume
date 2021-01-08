<template>
  <v-container>
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
      <v-col class="mb-1" cols="12" md="12">
        <h1 class="display-2 font-weight-bold mb-1">{{ fullname }}</h1>
        <p class="display-1 font-weight-regular">
          {{ title }}
        </p>
      </v-col>
    </v-row>
    <v-row justify="center" class="mb-2">
      <v-row justify="center" class="mb-1">
        <v-btn text color="primary" to="/c/linkedin" target="_blank">
          <v-icon large color="white">fab fa-linkedin</v-icon>
        </v-btn>
        <v-btn href="mailto:siwanont1@gmail.com" text target="_blank">
          <v-icon large color="white">fas fa-paper-plane</v-icon>
        </v-btn>
        <v-btn text color="primary" to="/c/github" target="_blank">
          <v-icon large color="white">fab fa-github</v-icon>
        </v-btn>
      </v-row>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import info from "@/assets/info.json";

export default {
  name: "ProfileHeader",
  data: () => ({
    fullname: info.header.fullname,
    title: info.header.title
  }),
};
</script>
