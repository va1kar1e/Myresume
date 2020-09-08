<template>
  <v-expansion-panels flat accordion hover>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <p :class="`title text-capitalize font-weight-bold text-left green--text`">Project</p>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <p
          :class="`body-1 font-weight-light text-left black--text`"
        > 1. Trusted Web Domain Analysis based on SSL/TLS certificate</p>
        <v-list-item v-for="(item, i) in archieve" :key="i">
          <p
            :class="`body-1 font-weight-light text-left black--text`"
            v-html="item"
          >{{ item }}</p>
        </v-list-item>
        <p :class="`body-1 font-weight-light text-left black--text`">
          2. Explore a Danger area with a Robot using
          <b>NodeMCU</b> and
          <b>P2P Camera </b>
        </p>
        <p :class="`body-1 font-weight-light text-left black--text`">
          3. Web-based Hospital appointment management system using
          <b>Django</b>
        </p>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<style>
.header-content {
  padding: 0px 0px 0px 0px !important;
  margin-top: 5px;
  margin-bottom: 0px !important;
  margin-left: 5px;
}
</style>

<script lang="ts">
export default {
  name: "Project",
  data: () => ({
    archieve: [
      "&bull; Studying the threat unawareness with the SSL/TLS certificate of the top 50 university websites.",
      "&bull; Collecting SSL/TLS certificate and ranking web domain trust with <b>TestSSL.sh</b> and <b>Javascript</b>.",
      "&bull; Building a web dashboard to display the rank of web domain trust with description using <b>NextJS</b> and <b>SemanticUI</b>."
    ]
  })
};
</script>
