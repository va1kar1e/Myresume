<template>
  <div class="home content-container">
    <h1>{{ title }}</h1>
    <Hireme />
    <v-show-at small> 😸 </v-show-at>
    <v-show-at medium> 😺 </v-show-at>
    <v-show-at large> 😽 </v-show-at>
    <v-show-at xlarge> 🐱 </v-show-at>
    <v-show-at no-match> 😿 </v-show-at>
  </div>
</template>

<script>
import Hireme from "@/views/Hireme.vue";
import { VShowAt } from "vue-breakpoint-component";

export default {
  components: {
    Hireme,
    VShowAt
  },
  data() {
    return {
      title: "Home"
    };
  }
};
</script>
