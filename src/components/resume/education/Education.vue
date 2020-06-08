<template>
  <v-col class="mb-1 py-2" cols="12" md="12" lg="12">
    <v-expansion-panels flat accordion hover>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <div class="title">
            <h2 class="display-1 font-weight-bold mb-5 text-uppercase">Education</h2>
            <h2 :class="`headline font-weight-bold mb-4 text-uppercase green--text`">KASETSART UNIVERSITY</h2>
            <p class="title font-weight-light">
              <b>Bachelor of Engineering, Computer Engineering</b>,
              <i>August 2015 - May 2019</i>
            </p>
            <p class="body-2 font-italic font-weight-light"></p>
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
            <v-col cols="12" md="6" lg="6">
              <Thesis />
              <Work />
            </v-col>
            <v-col cols="12" md="6" lg="6">
              <Internship />
              <Project />
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-col>
</template>

<script>
import Thesis from "./components/Thesis.vue";
import Project from "./components/Project.vue";
import Internship from "./components/Internship.vue";
import Work from "./components/Work.vue";

export default {
  name: "Education",
  components: {
    Thesis,
    Project,
    Internship,
    Work
  }
};
</script>
