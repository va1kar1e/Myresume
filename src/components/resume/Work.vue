<template>
  <v-container>
    <v-col class="mb-2" cols="12">
      <h2 class="display-1 font-weight-bold mb-5 text-uppercase text-center">
        Work Experience
      </h2>
      <v-row justify="center">
        <v-col cols="12">
          <v-timeline :dense="true" v-for="(item, i) in items" :key="i">
            <v-timeline-item :color="item.color" :icon="item.icon" large>
              <v-expansion-panels flat accordion hover>
                <v-expansion-panel>
                  <v-col cols="12" sm="12" md="4" lg="4"></v-col>
                  <v-expansion-panel-header>
                    <div class style="padding-bottom: 0px !important">
                      <div class="title">
                        <h2
                          :class="`font-weight-bold mb-4 text-uppercase text-center`"
                          :style="`color:` + item.color"
                        >
                          {{ item.name }}
                        </h2>
                        <h3 class="title mb-5 font-weight-bold text-center">
                          {{ item.role }}
                        </h3>
                        <h5 class="body-1 font-weight-light text-right">
                          {{ item.year }}
                        </h5>
                      </div>
                    </div>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <h5 class="body-1 font-italic text-right">
                      {{ item.keyword }}
                    </h5>
                    <div class="mb-5">
                      <h5
                        :class="`title text-capitalize font-weight-bold mb-4 text-left`"
                        :style="`color:` + item.color"
                      >
                        Team
                      </h5>
                      <p
                        :class="`body-1 font-weight-light text-left`"
                        v-html="item.team"
                      >
                        {{ item.team }}
                      </p>
                    </div>
                    <div class="mb-5">
                      <h5
                        :class="`title text-capitalize font-weight-bold mb-4 text-left`"
                        :style="`color:` + item.color"
                      >
                        Achievements
                      </h5>
                      <p
                        v-for="(dot, i) in item.archiev"
                        :key="i"
                        :class="`body-1 font-weight-light text-left`"
                        v-html="dot"
                      >
                        {{ dot }}
                      </p>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<style scoped>
col {
  padding: 0px 40px 0px 40px;
}
p {
  padding-left: 15px !important;
}
.v-expansion-panel-header {
  background-color: #17222f !important;
}
.v-expansion-panel-content {
  background-color: #17222f !important;
}
.v-timeline {
  padding-top: 0px;
}
.v-timeline::before {
  background: #17222f !important;
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
        color: "#5b2bdc",
        name: "SCB",
        keyword: "Also known as Siam Commercial Bank",
        role: "Digital Threat and Vulnerability Management Engineer",
        team:
          "Security Threat & Vulnerability Department, Security Operations Division, Technology Architecture, Security & Risk Function<br>Chief Technology Office",
        archiev: [
          "&bull; Being responsible for Cybersecurity, Penetration Testing, Vulnerability Management, and Risk Assessment.",
        ],
      },
      {
        year: "June 2019 - May 2020",
        icon: "fas fa-server",
        color: "#1d5ff5",
        name: "REFINITIV",
        keyword: "Formerly Thomson Reuters Financial & Risk",
        role: "Technology Graduate Trainee",
        team: "Datacenter Operation - Network Change",
        archiev: [
          "&bull; Being responsible for <b>LAN Implementation</b> and troubleshooting to resolve the incident by following the <b>ITIL</b> process.",
          "&bull; Working with network devices and network Automation.",
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
