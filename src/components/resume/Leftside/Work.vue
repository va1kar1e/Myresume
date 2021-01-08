<template>
  <div>
    <p class="headline font-weight-bold text-uppercase resume-p">
      Works
    </p>
    <div v-for="(item, i) in works" :key="i">
      <v-row class="resume-row">
        <v-col cols="8" class="resume-col">
          <p
            class="title font-weight-bold text-uppercase resume-p"
            :style="`color:` + item.color"
          >
            {{ item.name }}
          </p>
        </v-col>
        <v-col cols="4" class="resume-col-right" >
          <p class="caption text-right font-italic font-weight-regular resume-p">
            {{ item.year }}
          </p>
        </v-col>
      </v-row>
      <p class="caption font-weight-light font-italic resume-p">
        {{ item.keyword }}
      </p>
      <v-row class="resume-row">
        <v-col cols="2" class="resume-col">
          <p
            :class="`subtitle-2 text-uppercase font-weight-bold resume-p`"
            :style="`color:` + item.color"
          >
            Role
          </p>
        </v-col>
        <v-col cols="10" class="resume-col">
          <p class="subtitle-2 font-weight-light text-right resume-p">
            {{ item.role }}
          </p>
          <p
            :class="`caption font-weight-regular text-right resume-p`"
          >
            {{ item.team }} Team
          </p>
        </v-col>
      </v-row>
      <div v-if="i<3">
        <p
          :class="`subtitle-2 text-uppercase font-weight-bold resume-p`"
          :style="`color:` + item.color"
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
  </div>
</template>

<script>
import info from "@/assets/info.json";

export default {
  name: "ResumeLeftSideWork",
  data() {
    return {
      works: info.work.items,
      fullname: info.header.fullname,
      title: info.header.title,
      aboutme: info.aboutme.contentText,
    };
  }
};
</script>
