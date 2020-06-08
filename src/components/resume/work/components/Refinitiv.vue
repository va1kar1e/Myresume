<template>
  <v-timeline-item color="blue" icon="fas fa-server">
    <template v-slot:opposite>
      <span :class="`headline font-weight-regular font-italic blue--text`" v-text="items.year"></span>
    </template>
    <v-expansion-panels flat accordion hover>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <div class="py-4" style="padding-bottom: 0px !important;">
            <div class="title">
              <h2 :class="`headline font-weight-bold mb-4 text-uppercase blue--text`">{{ items.title }}</h2>
              <p class="title font-weight-light">{{ items.role }}</p>
            </div>
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="team mb-5">
            <p
              :class="`title text-capitalize font-weight-bold mb-4 text-left blue--text header-content`"
            >Team</p>
            <p :class="`body-1 font-weight-light text-left black--text`">{{ items.team }}</p>
          </div>
          <div class="archiev mb-5">
            <p
              :class="`title text-capitalize font-weight-bold mb-4 text-left blue--text header-content`"
            >Achievements</p>
            <p
              v-for="(item, i) in items.archiev"
              :key="i"
              :class="`body-1 font-weight-light text-left black--text`"
              v-html="item"
            >{{ item }}</p>
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
</style>

<script>
export default {
  name: "Refinitiv",
  data: () => ({
    items: {
      year: "June 2019 - May 2020",
      icon: "",
      title: "REFINITIV",
      role: "Technology Graduate Trainee",
      team: "Datacenter Operation - Network Change",
      archiev: [
        "&bull; Being responsible for <b>LAN Implementation</b> and troubleshooting to resolve the incident by following the <b>ITIL</b> process.",
        "&bull; Working with network devices ie. <b>Cisco</b>, <b>Checkpoint</b>, <b>Netscreen</b>, <b>Palo Alto</b>, <b>F5</b>, and <b>HP Network Automation</b>.",
        "&bull; Building auto-generate the command script by using <b>python</b>.",
        "&bull; Working with the architecture teams, management teams, and other implementation teams to follow enterprise architecture standards and company policies.",
        "&bull; Building the <b>TUMBUN Donation Platform</b> that is a part of the Company Sustainability Project to help people living in poverty. Being responsible for enabling financial services through a payment gateway; <b>OMISE</b>, logging transaction in <b>MongoDB</b>, and building API services connecting with the Front-end side by using <b>NodeJS</b> and <b>ExpressJS</b>."
      ]
    }
  })
};
</script>
