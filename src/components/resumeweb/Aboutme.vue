<template>
  <v-container class="text-center">
    <v-col class="mb-1" cols="12">
      <h2 class="display-1 font-weight-bold mb-1 text-uppercase">About Me</h2>
      <v-row justify="center">
        <v-col cols="12">
          <p
            v-for="(content, i) in contentText"
            :key="i"
            class="title font-weight-bold text-left text-md-justify"
            v-html="content"
          >
            {{ content }}
          </p>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<style scoped>
p {
  padding: 0px 10px 0px 20px !important;
}
</style>

<script lang="ts">
import info from "@/assets/info.json";

export default {
  data() {
    return {
      contentText: info.aboutme.contentText,
    };
  },
};
</script>
