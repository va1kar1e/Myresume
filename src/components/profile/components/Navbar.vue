<template>
  <v-app-bar app>
    <div class="d-flex align-center">
      <v-img
        class="shrink mr-2"
        contain
        :src="require('@/assets/images/logo.png')"
        transition="scale-transition"
        width="40"
      />
      <v-toolbar-title class="shrink mt-1 font-weight-bold" contain
        >Siwanont's Profile</v-toolbar-title
      >
    </div>
    <v-spacer></v-spacer>
    <v-toolbar-items class="d-none d-md-flex">
      <!-- <v-btn @click.stop="dialog = true" text>
        <span class="mr-2">Download My Resume</span>
        <v-icon color="white">fas fa-cloud-download-alt</v-icon>
      </v-btn> -->
      <!-- <v-dialog v-model="dialog" min-width="200" max-width="600"
        ><Linkresume
      /></v-dialog> -->
      <v-btn href="mailto:siwanont1@gmail.com" text target="_blank">
        <span class="mr-2">Hire me</span>
        <v-icon color="white">fas fa-paper-plane</v-icon>
      </v-btn>
    </v-toolbar-items>
    <v-menu bottom close-on-click dark>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on" class="d-flex d-md-none">
          <v-icon color="white">mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item @click.stop="dialog = true">
          <v-list-item-icon>
            <v-icon color="white">fas fa-cloud-download-alt</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Download My Resume</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item href="mailto:siwanont1@gmail.com" target="_blank">
          <v-list-item-icon>
            <v-icon color="white">fas fa-paper-plane</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Hire me</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
// import Linkresume from "./Linkresume.vue";

export default {
  data() {
    return {
      dialog: false,
    };
  },
  components: {
    // Linkresume,
  },
};
</script>
