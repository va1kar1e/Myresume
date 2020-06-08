<template>
  <v-timeline-item color="purple" icon="fas fa-code">
    <template v-slot:opposite>
      <span :class="`headline font-weight-regular font-italic purple--text`" v-text="items.year"></span>
    </template>
    <v-expansion-panels flat accordion hover>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <div class="py-4" style="padding-bottom: 0px !important;">
            <div class="title">
              <h2 :class="`headline font-weight-bold mb-4 text-uppercase purple--text`">{{ items.title }}</h2>
              <p class="title font-weight-light">{{ items.role }}</p>
            </div>
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="team mb-5">
            <p
              :class="`title text-capitalize font-weight-bold mb-4 text-left purple--text header-content`"
            >Team</p>
            <p :class="`body-1 font-weight-light text-left black--text`">{{ items.team }}</p>
          </div>
          <div class="archiev mb-5">
            <p
              :class="`title text-capitalize font-weight-bold mb-4 text-left purple--text header-content`"
            >Achievements</p>
            <p
              v-for="(item, i) in items.archiev"
              :key="i"
              :class="`body-1 font-weight-light text-left black--text`"
              v-html="item"
            >&bull; {{ item }}</p>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-timeline-item>
</template>

<style>
col {
  padding: 0px 40px 0px 40px;
}
ul {
  padding-left: 15px !important;
}
.header-content {
  padding: 0px 0px 0px 0px !important;
  margin-top: 5px;
  margin-bottom: 0px !important;
  margin-left: 5px;
}
.content {
  margin-left: 12px;
}
.title {
  text-align: center !important;
}
</style>

<script lang="ts">
export default {
  name: "Refinitiv",
  data: () => ({
    items: {
      year: "June 2017 - August 2017",
      title: "INTERNET MARKETING",
      role: "Fullstack Developer",
      team: "Data Science",
      archiev: [
        "&bull; Being responsible for building a web dashboard monitoring active users and Analyzing Social Influencer with <b>Social Graph</b> and Trend keywords with <b>Wordcloud</b>.",
        "&bull; Building a web application with <b>NodeJS</b>, <b>ExpressJS</b>, and <b>Bootstrap</b> and text visualization with D3JS.",
        "&bull; Processing and storing data in <b>MongoDB</b>."
      ]
    }
  })
};
</script>