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
          >
            <template v-slot:opposite>
              <span :class="`headline font-weight-regular ${item.color}--text`" v-text="item.year"></span>
            </template>
            <div class="py-4">
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
                      <!-- <v-row style="float: right">
                        <v-dialog v-model="dialog" width="600px">
                          <template v-slot:activator="{ on }">
                            <v-btn color="primary" dark v-on="on" text small>See More</v-btn>
                          </template>
                          <v-card>
                            <v-card-title>
                              <span class="headline">Use Google's location service?</span>
                            </v-card-title>
                            <v-card-text>Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit. Nostra urna at, magna at neque sed sed ante imperdiet, dolor mauris cursus velit, velit non, sem nec. Volutpat sem ridiculus placerat leo, augue in, duis erat proin condimentum in a eget, sed fermentum sed vestibulum varius ac, vestibulum volutpat orci ut elit eget tortor. Ultrices nascetur nulla gravida ante arcu. Pharetra rhoncus morbi ipsum, nunc tempor debitis, ipsum pellentesque, vitae id quam ut mauris dui tempor, aptent non. Quisque turpis. Phasellus quis lectus luctus orci eget rhoncus. Amet donec vestibulum mattis commodo, nulla aliquet, nibh praesent, elementum nulla. Sit lacus pharetra tempus magna neque pellentesque, nulla vel erat.
                              Justo ex quisque nulla accusamus venenatis, sed quis. Nibh phasellus gravida metus in, fusce aenean ut erat commodo eros. Ut turpis, dui integer, nonummy pede placeat nec in sit leo. Faucibus porttitor illo taciti odio, amet viverra scelerisque quis quis et tortor, curabitur morbi a. Enim tempor at, rutrum elit condimentum, amet rutrum vitae tempor torquent nunc. Praesent vestibulum integer maxime felis. Neque aenean quia vitae nostra, tempus elit enim id dui, at egestas pulvinar. Integer libero vestibulum, quis blandit scelerisque mattis fermentum nulla, tortor donec vestibulum dolor amet eget, elit nullam. Aliquam leo phasellus aliquam curabitur metus a, nulla justo mattis duis interdum vel, mollis vitae et id, vestibulum erat ridiculus sit pulvinar justo sed. Vehicula convallis, et nulla wisi, amet vestibulum risus, quam ac egestas.
                              Et vitae, nulla gravida erat scelerisque nullam nunc pellentesque, a dictumst cras augue, purus imperdiet non. Varius montes cursus varius vel tortor, nec leo a qui, magni cras, velit vel consectetuer lobortis vel. Nibh erat et wisi felis leo porttitor, sapien nibh sapien pede mi, sed eget porttitor, repellendus arcu ac quis. Luctus vulputate aut est sem magna, placerat accumsan nunc vestibulum ipsum ac auctor, maecenas lorem in ut nec mauris tortor, doloribus varius sem tortor vestibulum mollis, eleifend tortor felis tempus lacus eu eu. Eleifend vel eu, nullam maecenas mauris nec nunc euismod, tortor porta ridiculus potenti, massa tristique nam magna, et wisi placerat et erat ante. Eget pede erat in facilisis, fermentum venenatis sodales. Ac tortor sociis et non animi tristique, rhoncus malesuada, ut arcu volutpat scelerisque sollicitudin, elit curabitur dui pede purus dolor, integer aenean risus taciti nulla eleifend accumsan. At pulvinar diam parturient, interdum mi velit aliquet et a. Arcu at ac placerat eget justo semper, purus sociis curabitur mi ipsum consequat ut, mollis vestibulum, est ante ornare lacus sem. Neque magna mauris, commodo quisque, praesent semper suscipit lobortis nam. Justo malesuada cursus ac nunc litora nunc. Tellus ac, in lobortis nunc, montes lectus purus fermentum.
                              Ac sit wisi. Sodales aliquam, sed vestibulum nullam arcu sit risus arcu, id luctus vitae lorem nibh, integer nec nullam class cursus mi, purus arcu lectus. Vel ante suscipit volutpat potenti mattis sed, wisi eu placerat aliquam erat, lectus morbi lobortis at assumenda. Consequat neque purus ipsum voluptas odio, netus vestibulum ut nec, suspendisse pellentesque nec enim in. Wisi dictum sed semper a, ipsum erat tellus habitasse est, erat sem ornare, vitae quisque ultricies. Dui sed blandit. Tempor et faucibus justo sed luctus, nec vitae vitae. Nunc nibh pede, ipsum vestibulum aenean leo ante ultricies, nam cras quis sed penatibus amet. In mauris a. Integer metus mauris tortor, et rutrum vestibulum ultricies, ut phasellus in ullamcorper ut mollit, eu justo. Cursus pretium venenatis.
                              Cras pellentesque vel sodales accumsan aenean. Feugiat metus sit nec in aliquet amet, porttitor pretium vulputate massa. Consequat ipsum luctus quisque adipiscing libero. Wisi sollicitudin. Eget vitae ac lobortis, lorem natoque vestibulum et, aliquet faucibus at morbi nibh, vel condimentum. Massa unde orci sed id sed, odio donec congue nec praesent amet. Hymenaeos velit lacus, quis vivamus libero tempus duis, eu nisi eu, ipsum at accumsan pede justo morbi donec, massa et libero sit risus neque tortor. Ut sed sed etiam hendrerit dapibus, quis metus suspendisse nibh.
                              Fringilla tempor felis augue magna. Cum arcu a, id vitae. Pellentesque pharetra in cras sociis adipiscing est. Nibh nec mattis at maecenas, nisl orci aliquam nulla justo egestas venenatis, elementum duis vel porta eros, massa vitae, eligendi imperdiet amet. Nec neque luctus suscipit, justo sem praesent, ut nisl quisque, volutpat torquent wisi tellus aliquam reprehenderit, curabitur cras at quis massa porttitor mauris. Eros sed ultrices. Amet dignissim justo urna feugiat mauris litora, etiam accumsan, lobortis a orci suspendisse. Semper ac mauris, varius bibendum pretium, orci urna nunc ullamcorper auctor, saepe sem integer quam, at feugiat egestas duis. Urna ligula ante. Leo elementum nonummy. Sagittis mauris est in ipsum, nulla amet non justo, proin id potenti platea posuere sit ut, nunc sit erat bibendum. Nibh id auctor, ab nulla vivamus ultrices, posuere morbi nunc tellus gravida vivamus.
                              Mauris nec, facilisi quam fermentum, ut mauris integer, orci tellus tempus diam ut in pellentesque. Wisi faucibus tempor et odio leo diam, eleifend quis integer curabitur sit scelerisque ac, mauris consequat luctus quam penatibus fringilla dis, vitae lacus in, est eu ac tempus. Consectetuer amet ipsum amet dui, sed blandit id sed. Tellus integer, dignissim id pede sodales quis, felis dolorem id mauris orci, orci tempus ut. Nullam hymenaeos. Curabitur in a, tortor ut praesent placerat tincidunt interdum, ac dignissim metus nonummy hendrerit wisi, etiam ut.
                              Semper praesent integer fusce, tortor suspendisse, augue ligula orci ante asperiores ullamcorper. In sit per mi sed sed, mi vestibulum mus nam, morbi mauris neque vitae aliquam proin senectus. Ac amet arcu mollis ante congue elementum, inceptos eget optio quam pellentesque quis lobortis, sollicitudin sed vestibulum sollicitudin, lectus parturient nullam, leo orci ligula ultrices. At tincidunt enim, suspendisse est sit sem ac. Amet tellus molestie est purus magna augue, non etiam et in wisi id. Non commodo, metus lorem facilisi lobortis ac velit, montes neque sed risus consectetuer fringilla dolor. Quam justo et integer aliquam, cursus nulla enim orci, nam cursus adipiscing, integer torquent non, fringilla per maecenas. Libero ipsum sed tellus purus et. Duis molestie placerat erat donec ut. Dolor enim erat massa faucibus ultrices in, ante ultricies orci lacus, libero consectetuer mauris magna feugiat neque dapibus, donec pretium et. Aptent dui, aliquam et et amet nostra ligula.
                              Augue curabitur duis dui volutpat, tempus sed ut pede donec. Interdum luctus, lectus nulla aenean elit, id sit magna, vulputate ultrices pellentesque vel id fermentum morbi. Tortor et. Adipiscing augue lorem cum non lacus, rutrum sodales laoreet duis tortor, modi placerat facilisis et malesuada eros ipsum, vehicula tempus. Ac vivamus amet non aliquam venenatis lectus, sociosqu adipiscing consequat nec arcu odio. Blandit orci nec nec, posuere in pretium, enim ut, consectetuer nullam urna, risus vel. Nullam odio vehicula massa sed, etiam sociis mauris, lacus ullamcorper, libero imperdiet non sodales placerat justo vehicula. Nec morbi imperdiet. Fermentum sem libero iaculis bibendum et eros, eget maecenas non nunc, ad pellentesque. Ut nec diam elementum interdum. Elementum vitae tellus lacus vitae, ipsum phasellus, corporis vehicula in ac sed massa vivamus, rutrum elit, ultricies metus volutpat.
                              Semper wisi et, sollicitudin nunc vestibulum, cursus accumsan nunc pede tempus mi ipsum, ligula sed. Non condimentum ac dolor sit. Mollis eu aliquam, vel mattis mollis massa ut dolor ante, tempus lacinia arcu. Urna vestibulum lorem, nulla fermentum, iaculis ut congue ac vivamus. Nam libero orci, pulvinar nulla, enim pellentesque consectetuer leo, feugiat rhoncus rhoncus vel. Magna sociosqu donec, dictum cursus ullamcorper viverra. Ultricies quis orci lorem, suspendisse ut vestibulum integer, purus sed lorem pulvinar habitasse turpis.
                              +</v-card-text>
                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>
                              <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                      </v-row> -->
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
            ]
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
            ]
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
            ]
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
            ]
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
            ]
          }
        ]
      }
    ]
  })
};
</script>
