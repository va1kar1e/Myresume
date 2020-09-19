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
export default {
  name: "Internship",
  data: () => ({
    archieve: [
      "&bull; Studying <b>automated find bugs</b> with the review code process.",
      "&bull; Studying <b>face detection</b> and <b>recognition</b> to build an authorization system with biometric on <b>Raspberry Pi</b>.",
    ],
  }),
};
</script>
