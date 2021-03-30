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
        <p :class="`body-1 font-weight-light text-left`"  v-html="project.name[0]">
          {{project.name[0]}}
        </p>
        <v-list-item v-for="(item, i) in project.archieve" :key="i">
          <p :class="`body-1 font-weight-light text-left`" v-html="item">
            {{ item }}
          </p>
        </v-list-item>
        <p :class="`body-1 font-weight-light text-left`" v-html="project.name[1]">
          {{project.name[1]}}
        </p>
        <p :class="`body-1 font-weight-light text-left`" v-html="project.name[2]">
          {{project.name[2]}}
        </p>
        <v-list-item>
          <p :class="`body-1 font-weight-light text-left`" v-html="project.videolink">
            {{ project.videolink }}
          </p>
        </v-list-item>
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
  name: "ProfileSection2EducationProject",
  data: () => ({
    project: info.education.project
  }),
};
</script>
