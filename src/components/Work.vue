<template>
  <v-col class="mb-1" cols="12">
    <h2 class="display-1 font-weight-bold mb-5">Work Experience</h2>
    <v-row justify="center">
      <v-col class="mb-1" cols="12">
        <v-timeline :dense="$vuetify.breakpoint.mdAndDown">
          <v-timeline-item
            v-for="(item, i) in items"
            :key="i"
            :color="item.color"
            :icon="item.icon"
          >
            <template v-slot:opposite>
              <span :class="`headline font-weight-regular ${item.color}--text`" v-text="item.year"></span>
            </template>
            <div class="py-4">
              <div class="title">
                <h2 :class="`headline font-weight-light mb-4 ${item.color}--text`">{{ item.title }}</h2>
                <p class=".subtitle-2 text-capitalize font-weight-light">{{ item.role }}</p>
              </div>
              <div class="team mb-5">
                <p :class="`text-capitalize font-weight-light text-left ${item.color}--text header-content`">Team</p>
                <p
                  :class="`body-1 font-weight-light text-left black--text content`"
                >{{ item.team }}</p>
              </div>
              <div class="archiev mb-5">
                <p
                  :class="`text-capitalize font-weight-light text-left ${item.color}--text header-content`"
                >Achievements/Tasks</p>
                <ul>
                  <li v-for="(task, i) in item.archiev" :key="i" :class="`content`">
                    <p
                      :class="`body-1 font-weight-light text-left black--text`"
                    >{{ task.name }}</p>
                    <!-- <v-chip
                      class="mr-2"
                      @click="lights"
                    >
                      <v-icon left>mdi-brightness-5</v-icon>
                      {{ task.name }}
                    </v-chip> -->
                  </li>
                </ul>
              </div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-col>
</template>

<style>
col {
  padding: 0px 40px 0px 40px;
}
p {
  padding: 0px 0px 0px 0px;
  margin-top: 5px;
  margin-bottom: 0px !important;
}
ul {
  padding-left: 15px !important;
}
.header-content {
  margin-left: 5px;
}
.content {
  margin-left: 15px;
}
</style>

<script lang="ts">
export default {
  name: "Header",
  data: () => ({
    items: [
      {
        color: "cyan",
        year: "June 2019 - Present",
        icon: "fas fa-server",
        title: "REFINITIV",
        role: "Technology Graduate Trainee",
        team: "Data Center Operation Network Change - Network Engineer",
        archiev: [
          {
            name: "LAN Implementation"
          },
          {
            name: "TUMBOON : Money Donation Web Application"
          }
        ]
      },
      {
        color: "green",
        year: "March 2016 - May 2019",
        icon: "fas fa-search",
        title: "Computer Engineering, Kasetsart University",
        role: "Junior Research Student",
        team: "Massive Information and Knowledge Engineering Laboratory",
        archiev: [
          {
            name: "Social Network Analysis with Ego Network using Twiter Data"
          },
          {
            name: "Real-Time Sentiment Change Detection of Twiter Data Stream"
          },
          {
            name: "Linux System Administrator (Ubuntu,CentOS)"
          },
          {
            name: "Teacher Assistant"
          }
        ]
      },
      {
        color: "purple",
        year: "June - August 2017",
        icon: "fas fa-code",
        title: "INTERNET MARKETING",
        role: "Outsource Fullstack Developer and Data Engineer",
        team: "Data Science",
        archiev: [
          {
            name: "Social Dashboard Monitoring"
          },
          {
            name: "Social Influencer Analysis with Social Graph"
          },
          {
            name: "Social Trend Analysis with Wordcloud"
          }
        ]
      }
    ]
  })
};
</script>
