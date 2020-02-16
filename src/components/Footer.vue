<template>
  <v-footer color="primary lighten-1" padless>
    <v-row justify="center" no-gutters>
      <v-btn to="/" color="white" text rounded class="my-2">Home</v-btn>
      <v-btn
        to="/resume"
        target="_blank"
        color="white"
        text
        rounded
        class="my-2"
      >
        Download My Resume
      </v-btn>
      <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>siwanont.ml</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
