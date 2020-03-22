<template>
  <v-col class="mb-1" cols="12">
    <h2 class="display-1 font-weight-bold mb-5 text-uppercase">Work Experience</h2>
    <v-row justify="center">
      <v-col class="mb-1" cols="12">
        <v-timeline :dense="$vuetify.breakpoint.mdAndDown">
          <v-timeline-item
            v-for="(item, i) in items"
            :key="i"
            :color="item.color"
            :icon="item.icon"
            style="padding-bottom: 0px"
          >
            <template v-slot:opposite>
              <span :class="`headline font-weight-regular ${item.color}--text`" v-text="item.year"></span>
            </template>
            <div class="py-4" style="padding-bottom: 0px !important;">
              <div class="title">
                <h2 :class="`headline font-weight-light mb-4 text-uppercase ${item.color}--text`">{{ item.title }}</h2>
                <p class="title font-weight-light">{{ item.role }}</p>
              </div>
              <div class="team mb-5">
                <p
                  :class="`font-weight-bold mb-4 text-left ${item.color}--text header-content`"
                >
                  Team
                </p>
                <p :class="`body-1 font-weight-light text-left black--text content`">{{ item.team }}</p>
              </div>
              <div class="archiev mb-5">
                <p
                  :class="`font-weight-bold text-left ${item.color}--text header-content`"
                >
                  Achievements/Tasks
                </p>
                <v-expansion-panels flat accordion hover>
                  <v-expansion-panel v-for="(task, i) in item.archiev" :key="i">
                    <v-expansion-panel-header>
                      <p :class="`body-1 font-weight-light text-left black--text header-content`">{{ task.name }}</p>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <v-row justify="center">
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
                      <v-responsive min-height="1vh"></v-responsive>
                      <v-row>
                        <v-spacer></v-spacer>
                        <v-dialog v-if="task.images" v-model="dialog" width="800px">
                          <template v-slot:activator="{ on }">
                            <v-btn color="primary" dark v-on="on" text small>See More</v-btn>
                          </template>
                          <v-carousel
                            hide-delimiters
                            height="auto"
                          >
                            <v-carousel-item
                              v-for="(image,i) in task.images"
                              :key="i"
                              :src="require('@/assets/images/' + image)"
                              reverse-transition="fade-transition"
                              transition="fade-transition"
                            ></v-carousel-item>
                          </v-carousel>
                        </v-dialog>
                      </v-row>
                    </v-expansion-panel-content>
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
</style>

<script lang="ts">
export default {
  name: "Work",
  data: () => ({
    dialog: false,
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
                color: "blue"
              },
              {
                name: "F5",
                color: "blue"
              },
              {
                name: "Palo Alto",
                color: "blue"
              },
              {
                name: "Checkpoint",
                color: "blue"
              },
              {
                name: "NetScreen",
                color: "blue"
              },
              {
                name: "Cisco",
                color: "blue"
              },
              {
                name: "Python",
                color: "blue"
              },
              {
                name: "HP Network Automation",
                color: "blue"
              }
            ],
            images: null
          },
          {
            name: "TUMBOON : Money Donation Web Application",
            skill: [
              {
                name: "Backend Development",
                color: "blue"
              },
              {
                name: "MEAN Stack",
                color: "blue"
              },
              {
                name: "Omise",
                color: "blue"
              }
            ],
            images: null
          }
        ]
      },
      {
        color: "green",
        year: "March 2016 - May 2019",
        icon: "fas fa-search",
        title: "Kasetsart University",
        role: "Junior Research Student",
        team: "Massive Information and Knowledge Engineering Laboratory - Department of Computer Engineering",
        archiev: [
          {
            name: "Social Network Analysis with Ego Network using Twitter Data",
            skill: [
              {
                name: "Data Visualization",
                color: "green"
              },
              {
                name: "Text Analysis",
                color: "green"
              },
              {
                name: "Text Mining",
                color: "green"
              },
              {
                name: "MongoDB",
                color: "green"
              },
              {
                name: "Express.JS",
                color: "green"
              },
              {
                name: "D3.JS",
                color: "green"
              },
              {
                name: "NodeJS",
                color: "green"
              },
              {
                name: "Bootstrap",
                color: "green"
              },
              {
                name: "Google NLP",
                color: "green"
              },
              {
                name: "Writing Academic Paper",
                color: "green"
              }
            ],
            images: [
              'egonet/page-0001.jpg',
              'egonet/page-0002.jpg'
            ]
          },
          {
            name: "Real-Time Sentiment Change Detection of Twitter Data Stream",
            skill: [
              {
                name: "Sentiment Analysis",
                color: "green"
              },
              {
                name: "Text Mining",
                color: "green"
              },
              {
                name: "Express.JS",
                color: "green"
              },
              {
                name: "NodeJS",
                color: "green"
              },
              {
                name: "Bootstrap",
                color: "green"
              }
            ],
            images: null
          },
          {
            name: "Linux System Administrator",
            skill: [
              {
                name: "Ubuntu",
                color: "green"
              },
              {
                name: "CentOS",
                color: "green"
              }
            ],
            images: null
          },
          {
            name: "Teacher Assistant",
            skill: [
              {
                name: "Python",
                color: "green"
              },
              {
                name: "C#",
                color: "green"
              }
            ],
            images: null
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
                color: "purple"
              },
              {
                name: "Social Influencer Analysis",
                color: "purple"
              },
              {
                name: "MongoDB",
                color: "purple"
              },
              {
                name: "Express.JS",
                color: "purple"
              },
              {
                name: "D3.JS",
                color: "purple"
              },
              {
                name: "NodeJS",
                color: "purple"
              },
              {
                name: "Bootstrap",
                color: "purple"
              }
            ],
            images: [
              'pantip/page-0001.png',
              'pantip/page-0002.png',
              'pantip/page-0003.png',
            ]
          },
          {
            name: "Social Trend Analysis with Wordcloud",
            skill: [
              {
                name: "Data Visualization",
                color: "purple"
              },
              {
                name: "Trend Analysis",
                color: "purple"
              },
              {
                name: "MongoDB",
                color: "purple"
              },
              {
                name: "Express.JS",
                color: "purple"
              },
              {
                name: "D3.JS",
                color: "purple"
              },
              {
                name: "NodeJS",
                color: "purple"
              },
              {
                name: "Bootstrap",
                color: "purple"
              }
            ],
            images: [
              'pantip/page-0004.png',
              'pantip/page-0005.png',
              'pantip/page-0006.png',
            ]
          }
        ]
      }
    ]
  })
};
</script>
