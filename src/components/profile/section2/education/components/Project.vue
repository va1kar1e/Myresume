<template>
  <v-expansion-panels flat accordion hover>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <p
          :class="`title text-capitalize font-weight-bold text-left green--text`"
        >
          Project
        </p>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <p :class="`body-1 font-weight-light text-left`">
          1. Trusted Web Domain Analysis based on SSL/TLS certificate
        </p>
        <v-list-item v-for="(item, i) in archieve" :key="i">
          <p :class="`body-1 font-weight-light text-left`" v-html="item">
            {{ item }}
          </p>
        </v-list-item>
        <p :class="`body-1 font-weight-light text-left`">
          2. Explore a Danger area with a Robot using
          <b>NodeMCU</b> and
          <b>P2P Camera </b>
        </p>
        <p :class="`body-1 font-weight-light text-left`">
          3. Web-based Hospital appointment management system using
          <b>Django</b>
        </p>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<style scoped lang="scss">
@import "@/styles/card.scss";
</style>

<script lang="ts">
import info from "@/assets/info.json";

export default {
  name: "Project",
  data: () => ({
    archieve: info.education.project.archieve
  }),
};
</script>
