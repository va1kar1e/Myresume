<template>
  <v-expansion-panels flat accordion hover>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <p
          :class="`title text-capitalize font-weight-bold text-left green--text`"
        >
          Extracurricular Work
        </p>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <p
          :class="`subtitle-1 text-capitalize font-weight-bold text-left green--text`"
        >
          Massive Information and Knowledge Engineering Laboratory
        </p>
        <p
          :class="`subtitle-1 text-capitalize font-weight-bold text-left green--text`"
        >
          Achievements
        </p>
        <p :class="`body-1 font-weight-light text-left`">
          1. Social Network Analysis with Ego Network on Twitter Data
        </p>
        <v-list-item v-for="(item, i) in archieve" :key="i">
          <p :class="`body-1 font-weight-light text-left`" v-html="item">
            {{ item }}
          </p>
        </v-list-item>
        <p :class="`body-1 font-weight-light text-left`">
          2. <b>Ubuntu</b> and <b>Centos server</b> administrator and teacher
          assistant for Python classes.
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
  name: "ProfileSection2EducationWork",
  data: () => ({
    archieve: info.education.work.archieve
  }),
};
</script>
