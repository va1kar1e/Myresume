<template>
  <v-expansion-panels flat accordion hover>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <p
          :class="`title text-capitalize font-weight-bold text-left green--text`"
        >
          Internship
        </p>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <p
          :class="`subtitle-1 text-capitalize font-weight-bold text-left green--text`"
        >
          Kyoto Institute of Technology Software Engineering Laboratory
        </p>

        <p :class="`body-1 font-weight-light text-left`">
          Making a Fault-Prones Notification for Developer Team on Raspbery Pi
        </p>

        <v-list-item v-for="(item, i) in archieve" :key="i">
          <p :class="`body-1 font-weight-light text-left`" v-html="item">
            {{ item }}
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
  name: "Internship",
  data: () => ({
    archieve: info.education.internship.archieve
  }),
};
</script>
