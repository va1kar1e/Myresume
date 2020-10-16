<template>
  <v-container>
    <v-col class="mb-1" cols="12">
      <h2 class="display-1 font-weight-bold mb-1 text-uppercase text-center">
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

<script lang="ts">
import info from "@/assets/info.json";

export default {
  name: "Work",
  data: () => ({
    items: info.work.items
  }),
};
</script>
