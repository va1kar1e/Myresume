<template>
  <div class="work">
    <p class="subtitle-1 font-weight-bold text-uppercase text-center resume-p">
      Works
    </p>
    <div v-for="(item, i) in works" :key="i">
      <v-row>
        <v-col cols="8" style="padding-bottom: 0px !important">
          <p
            class="subtitle-1 font-weight-bold text-uppercase resume-p"
          >
            {{ item.name }}
          </p>
        </v-col>
        <v-col cols="4" style="padding-bottom: 0px !important">
          <p class="caption text-right font-italic font-weight-regular resume-p">
            {{ item.year }}
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <p
            :class="`subtitle-2 text-uppercase font-weight-bold resume-p`"
          >
            Role
          </p>
        </v-col>
        <v-col cols="10">
          <p class="caption font-weight-light text-right resume-p">
            {{ item.role }}, {{ item.team }} Team
          </p>
        </v-col>
      </v-row>
      <p
        :class="`subtitle-2 text-uppercase font-weight-bold resume-p`"
      >
        Achievements
      </p>
      <p
        v-for="(dot, j) in item.archiev"
        :key="j"
        :class="`caption font-weight-light resume-p`"
        v-html="dot"
      >
        {{ dot }}
      </p>
    </div>
  </div>
</template>

<script>
import info from "@/assets/info.json";

export default {
  name: "ResumeWork",
  data() {
    return {
      works: [
        info.work.items[0],
        info.work.items[1],
      ],
      fullname: info.header.fullname,
      title: info.header.title,
      aboutme: info.aboutme.contentText,
    };
  }
};
</script>
