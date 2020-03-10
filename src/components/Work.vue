<template>
  <v-col class="mb-1" cols="12">
    <h2 class="display-1 font-weight-bold mb-5">
      Work Experience
    </h2>
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
              <span
                :class="`headline font-weight-regular ${item.color}--text`"
                v-text="item.year"
              ></span>
            </template>
            <div class="py-4">
              <h2
                :class="`headline font-weight-light mb-4 ${item.color}--text`"
              >
                {{ item.title }}
              </h2>
              <div class="title">
                <p class="text-capitalize font-weight-light">
                  {{ item.role[0] }}
                </p>
                <!-- <p :class="`text-capitalize font-weight-thin text-left ${item.color}--text`">
                  Achievements/Tasks
                </p> -->
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
</style>

<script lang="ts">
export default {
  name: "Header",
  data: () => ({
    items: [
      {
        color: "cyan",
        year: "2019 - Present",
        icon: "fas fa-server",
        title: "REFINITIV",
        role: ["Technology Graduate Trainee - Network Engineer"]
      },
      {
        color: "green",
        year: "March 2016 - May 2019",
        icon: "fas fa-search",
        title:
          "Massive Information and Knowledge Engineering Laboratory",
        role: ["Junior Research Student"]
      },
      {
        color: "purple",
        year: "June - August 2017",
        icon: "fas fa-code",
        title: "INTERNET MARKETING",
        role: ["Ful-stack Web Developer, Data Engineer"]
      }
    ]
  })
};
</script>
