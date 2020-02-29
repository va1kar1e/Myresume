<template>
  <v-footer padless>
    <v-row justify="center grey lighten-5" no-gutters>
      <v-btn
        to="/resume"
        target="_blank"
        text
        rounded
        class="my-2"
      >
        Download My Resume
      </v-btn>
      <v-col class="py-4 text-center grey lighten-4" cols="12">
        {{ new Date().getFullYear() }} —
        <v-btn
          to="/"
          text
          class="my-2"
        >
          siwanont.ml
        </v-btn>
      </v-col>
    </v-row>
  </v-footer>
</template>
