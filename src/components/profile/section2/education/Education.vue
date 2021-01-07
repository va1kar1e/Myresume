<template>
  <v-container>
    <v-col class="mb-2 py-2" cols="12" md="12" lg="12">
      <h2 class="display-1 font-weight-bold mb-5 text-uppercase text-center">
        Education
      </h2>
      <v-expansion-panels flat accordion hover>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <div class="title">
              <h2
                :class="`headline font-weight-bold mb-4 text-uppercase green--text text-center`"
              >
                {{ university }}
              </h2>
              <h3 class="title font-weight-bold text-center">
                {{ faculty }}
              </h3>
              <h5 class="body-1 font-italic text-right">
                {{ period }}
              </h5>
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
  </v-container>
</template>

<style scoped lang="scss">
@import "@/styles/card.scss";
</style>

<script>
import info from "@/assets/info.json";
import Thesis from "./components/Thesis.vue";
import Project from "./components/Project.vue";
import Internship from "./components/Internship.vue";
import Work from "./components/Work.vue";

export default {
  name: "Education",
  data: () => ({
    university: info.education.main.university,
    faculty: info.education.main.faculty,
    period: info.education.main.period
  }),
  components: {
    Thesis,
    Project,
    Internship,
    Work,
  },
};
</script>
