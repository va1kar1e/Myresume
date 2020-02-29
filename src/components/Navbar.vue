<template>
  <v-app-bar app>
    <div class="d-flex align-center">
      <v-img
        alt="Siwanont Logo"
        class="shrink mr-2"
        contain
        :src="require('@/assets/images/logo.png')"
        transition="scale-transition"
        width="40"
      />
      <v-toolbar-title
        class="shrink mt-1 hidden-sm-and-down font-weight-bold"
        contain
      >
        Siwanont's Resume
      </v-toolbar-title>
    </div>

    <v-spacer></v-spacer>

    <v-btn to="/resume" target="_blank" text>
      <span class="mr-2">Download My Resume</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>
