<template>
  <v-col class="mb-1" cols="12">
    <h2 class="display-1 font-weight-bold mb-5 text-uppercase">Work Experience</h2>
    <v-row justify="center">
      <v-col class="mb-1" cols="12">
        <v-timeline dense="true" v-for="(item, i) in items" :key="i">
          <v-timeline-item :color="item.color" :icon="item.icon">
            <v-expansion-panels flat accordion hover>
              <v-expansion-panel>
                <v-col cols="12" sm="12" md="4" lg="4"></v-col>
                <v-expansion-panel-header>
                  <div class style="padding-bottom: 0px !important;">
                    <div class="title">
                      <h2
                        :class="`headline font-weight-bold mb-4 text-uppercase`"
                        :style="`color:` + item.color"
                      >{{ item.name }}</h2>
                      <p class="title font-weight-light">{{ item.role }}</p>
                    </div>
                  </div>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div class="subtitle">
                    <p class="body-1 font-italic text-right">{{ item.keyword }}</p>
                    <p class="body-1 font-weight-light text-right">{{ item.year }}</p>
                  </div>
                  <div class="team mb-5">
                    <p
                      :class="`title text-capitalize font-weight-bold mb-4 text-left header-content`"
                      :style="`color:` + item.color"
                    >Team</p>
                    <p
                      :class="`body-1 font-weight-light text-left black--text`"
                      v-html="item.team"
                    >{{ item.team }}</p>
                  </div>
                  <div class="archiev mb-5">
                    <p
                      :class="`title text-capitalize font-weight-bold mb-4 text-left header-content`"
                      :style="`color:` + item.color"
                    >Achievements</p>
                    <p
                      v-for="(dot, i) in item.archiev"
                      :key="i"
                      :class="`body-1 font-weight-light text-left black--text`"
                      v-html="dot"
                    >{{ dot }}</p>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
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
.title {
  text-align: center !important;
}
</style>

<script>
export default {
  name: "Work",
  data: () => ({
    items: [
      {
        year: "Oct 2020 - Present",
        icon: "fas fa-user-secret",
        color: "#4e2a82",
        name: "SCB",
        keyword: "Also known as Siam Commercial Bank",
        role: "Digital Threat and Vulnerability Management Engineer",
        team:
          "Security Threat & Vulnerability Department, Security Operations Division, Technology Architecture, Security & Risk Function<br>Chief Technology Office",
        archiev: ["&bull; Being responsible for Red Teaming"],
      },
      {
        year: "June 2019 - May 2020",
        icon: "fas fa-server",
        color: "#0c1af5",
        name: "REFINITIV",
        keyword: "Formerly Thomson Reuters Financial & Risk",
        role: "Technology Graduate Trainee",
        team: "Datacenter Operation - Network Change",
        archiev: [
          "&bull; Being responsible for <b>LAN Implementation</b> and troubleshooting to resolve the incident by following the <b>ITIL</b> process.",
          "&bull; Working with network devices ie. <b>Cisco</b>, <b>Checkpoint</b>, <b>Netscreen</b>, <b>Palo Alto</b>, <b>F5</b>, and <b>HP Network Automation</b>.",
          "&bull; Building auto-generate the command script by using <b>python</b>.",
          "&bull; Working with the architecture teams, management teams, and other implementation teams to follow enterprise architecture standards and company policies.",
          "&bull; Building the <b>TUMBUN Donation Platform</b> that is a part of the Company Sustainability Project to help people living in poverty. Being responsible for enabling financial services through a payment gateway; <b>OMISE</b>, logging transaction in <b>MongoDB</b>, and building API services connecting with the Front-end side by using <b>NodeJS</b> and <b>ExpressJS</b>.",
        ],
      },
      {
        year: "June 2017 - August 2017",
        icon: "fas fa-code",
        color: "#684b90",
        name: "INTERNET MARKETING",
        keyword:
          "Also known as PANTIP - The popular internet forum in Thailand",
        role: "Fullstack Developer & Data Scientist",
        team: "Data Science",
        archiev: [
          "&bull; Being responsible for building a web dashboard monitoring active users and Analyzing Social Influencer with <b>Social Graph</b> and Trend keywords with <b>Wordcloud</b>.",
          "&bull; Building a web application with <b>NodeJS</b>, <b>ExpressJS</b>, and <b>Bootstrap</b> and text visualization with D3JS.",
          "&bull; Processing and storing data in <b>MongoDB</b>.",
        ],
      },
    ],
  }),
};
</script>
