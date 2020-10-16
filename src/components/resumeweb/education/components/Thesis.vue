<template>
  <v-expansion-panels flat accordion hover>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <p
          :class="`title text-capitalize font-weight-bold text-left green--text`"
        >
          Thesis
        </p>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <p :class="`body-1 font-weight-light text-left`">
          Search Result Clustering on Thai Internet Forum using Word2Vec Model
        </p>
        <v-list-item v-for="(item, i) in archieve" :key="i">
          <p :class="`body-1 font-weight-light text-left`" v-html="item">
            >{{ item }}
          </p>
        </v-list-item>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<style scoped>
.theme--dark.v-expansion-panels .v-expansion-panel {
  background-color: #17222f !important;
}
.header-content {
  padding: 0px 0px 0px 0px !important;
  margin-top: 5px;
  margin-bottom: 0px !important;
  margin-left: 5px;
}
</style>

<script lang="ts">
import info from "@/assets/info.json";

export default {
  name: "Thesis",
  data: () => ({
    archieve: info.education.thesis.archieve
  }),
};
</script>
