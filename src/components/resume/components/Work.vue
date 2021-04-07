“<template>
  <div class="work mt-1 mb-1">
    <p class="subtitle-1 font-weight-bold text-uppercase text-center resume-p">
      Works
    </p>
    <div class="horizontal-line"></div>
    <div v-for="(item, i) in works" :key="i">
      <v-row>
        <v-col cols="8" style="padding-bottom: 8px !important">
          <p
            class="subtitle-1 font-weight-bold text-uppercase resume-p"
          >
            {{ item.name }}
          </p>
        </v-col>
        <v-col cols="4" style="padding-bottom: 8px !important">
          <p class="subtitle-2 text-right font-italic font-weight-thin resume-p">
            {{ item.year }}
          </p>
        </v-col>
      </v-row>
      <p class="body-2 font-weight-regular resume-p">
        {{ item.role }}, {{ item.team }}
      </p>
      <p
        :class="`caption text-uppercase font-weight-bold resume-p`"
      >
        Achievements
      </p>
      <div v-for="(dot, j) in item.archiev" :key="j">
        <div v-if="i==1 && j==3"></div>
        <p
          v-else
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
  name: "ResumeWork",
  data() {
    return {
      works: [
        info.work.items[0],
        info.work.items[1],
        info.work.items[2],
      ],
      fullname: info.header.fullname,
      title: info.header.title,
      aboutme: info.aboutme.contentText,
    };
  }
};
</script>
