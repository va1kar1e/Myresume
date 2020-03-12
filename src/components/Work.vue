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
                <p
                  :class="`text-capitalize font-weight-light text-left ${item.color}--text header-content`"
                >
                  Team
                </p>
                <p :class="`body-1 font-weight-light text-left black--text content`">{{ item.team }}</p>
              </div>
              <div class="archiev mb-5">
                <p
                  :class="`text-capitalize font-weight-light text-left ${item.color}--text header-content`"
                >
                  Achievements/Tasks
                </p>
                <v-expansion-panels flat accordion hover>
                  <v-expansion-panel v-for="(task, i) in item.archiev" :key="i">
                    <div v-if="task.skill">
                      <v-expansion-panel-header>
                        {{ task.name }}
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <v-row justify="left" align="left">
                          <v-chip
                            :ripple="false"
                            v-for="(s, i) in task.skill"
                            :key="i"
                            class="ma-1"
                            :color="s.color"
                            small
                            outlined
                          >
                            {{ s.name }}
                          </v-chip>
                        </v-row>
                      </v-expansion-panel-content>
                    </div>
                    <div v-else>None</div>
                  </v-expansion-panel>
                </v-expansion-panels>
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
    overlay: false,
    items: [
      {
        color: "blue",
        year: "June 2019 - Present",
        icon: "fas fa-server",
        title: "REFINITIV",
        role: "Technology Graduate Trainee",
        team: "Data Center Operation Network Change - Network Engineer",
        archiev: [
          {
            name: "LAN Network Implementation",
            skill: [
              {
                name: "ITIL",
                color: "cyan darken-2"
              },
              {
                name: "F5",
                color: "green darken-1"
              },
              {
                name: "Palo Alto",
                color: "green darken-1"
              },
              {
                name: "Checkpoint",
                color: "green darken-1"
              },
              {
                name: "NetScreen",
                color: "green darken-1"
              },
              {
                name: "Cisco",
                color: "green darken-1"
              },
              {
                name: "Python",
                color: "light-blue darken-2"
              },
              {
                name: "HP Network Automation",
                color: "green darken-1"
              }
            ]
          },
          {
            name: "TUMBOON : Money Donation Web Application",
            skill: [
              {
                name: "Backend Development",
                color: "deep-purple darken-1"
              },
              {
                name: "MEAN Stack",
                color: "yellow darken-4"
              },
              {
                name: "Omise",
                color: "blue accent-3"
              }
            ]
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
            name: "Social Network Analysis with Ego Network using Twitter Data",
            skill: [
              {
                name: "Data Visualization",
                color: "deep-purple darken-1"
              },
              {
                name: "Text Analysis",
                color: "green darken-1"
              },
              {
                name: "Text Mining",
                color: "green darken-1"
              },
              {
                name: "MongoDB",
                color: "lime darken-3"
              },
              {
                name: "Express.JS",
                color: "yellow darken-4"
              },
              {
                name: "D3.JS",
                color: "yellow darken-4"
              },
              {
                name: "NodeJS",
                color: "yellow darken-4"
              },
              {
                name: "Bootstrap",
                color: "yellow darken-4"
              },
              {
                name: "Google NLP",
                color: "indigo darken-1"
              },
              {
                name: "Writing Academic Paper",
                color: "teal darken-3"
              }
            ]
          },
          {
            name: "Real-Time Sentiment Change Detection of Twitter Data Stream",
            skill: [
              {
                name: "Sentiment Analysis",
                color: "green darken-1"
              },
              {
                name: "Text Mining",
                color: "green darken-1"
              },
              {
                name: "Express.JS",
                color: "yellow darken-4"
              },
              {
                name: "NodeJS",
                color: "yellow darken-4"
              },
              {
                name: "Bootstrap",
                color: "yellow darken-4"
              }
            ]
          },
          {
            name: "Linux System Administrator",
            skill: [
              {
                name: "Ubuntu",
                color: "cyan darken-2"
              },
              {
                name: "CentOS",
                color: "deep-purple darken-4"
              }
            ]
          },
          {
            name: "Teacher Assistant",
            skill: [
              {
                name: "Python",
                color: "deep-purple darken-1"
              },
              {
                name: "C#",
                color: "green darken-1"
              }
            ]
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
            name: "Social Dashboard Monitoring",
            skill: [
              {
                name: "Data Visualization",
                color: "deep-purple darken-1"
              },
              {
                name: "Social Influencer Analysis",
                color: "green darken-1"
              },
              {
                name: "MongoDB",
                color: "lime darken-3"
              },
              {
                name: "Express.JS",
                color: "yellow darken-4"
              },
              {
                name: "D3.JS",
                color: "yellow darken-4"
              },
              {
                name: "NodeJS",
                color: "yellow darken-4"
              },
              {
                name: "Bootstrap",
                color: "yellow darken-4"
              }
            ]
          },
          {
            name: "Social Trend Analysis with Wordcloud",
            skill: [
              {
                name: "Data Visualization",
                color: "deep-purple darken-1"
              },
              {
                name: "Trend Analysis",
                color: "green darken-1"
              },
              {
                name: "MongoDB",
                color: "lime darken-3"
              },
              {
                name: "Express.JS",
                color: "yellow darken-4"
              },
              {
                name: "D3.JS",
                color: "yellow darken-4"
              },
              {
                name: "NodeJS",
                color: "yellow darken-4"
              },
              {
                name: "Bootstrap",
                color: "yellow darken-4"
              }
            ]
          }
        ]
      }
    ]
  })
};
</script>
