<template>
  <div>
    <p class="headline font-weight-bold text-uppercase resume-p">
      Education
    </p>
    <v-row class="resume-row">
      <v-col cols="7" class="resume-col">
        <p
          class="title font-weight-bold text-uppercase green--text resume-p"
        >
          {{ university }}
        </p>
      </v-col>
      <v-col cols="5" class="resume-col-right" >
        <p class="caption text-right font-italic font-weight-regular resume-p">
          {{ period }}
        </p>
      </v-col>
      <p class="subtitle-2 text-right font-weight-regular resume-p">
        {{ faculty }}
      </p>
    </v-row>
    <p
      :class="`subtitle-2 text-uppercase font-weight-bold resume-p`"
    >
      Thesis
    </p>
    <p
      :class="`caption font-weight-regular resume-p`"
    >
      {{thesis.name}}
    </p>
    <div v-for="(item, i) in thesis.archieve" :key="i">
      <p
        v-if="i==0 || i==5"
        class="caption font-weight-light resume-p"
        v-html="item"
      >
        {{ item }}
      </p>
    </div>
    <p
      :class="`subtitle-2 text-uppercase font-weight-bold resume-p`"
    >
      Extracurricular Work
    </p>
    <p
      :class="`caption font-weight-regular resume-p`"
    >
      {{work.where}}
    </p>
    <div v-for="(item, i) in work.project" :key="i">
      <p
        v-if="i<2"
        :class="`caption font-weight-light resume-p`"
        v-html="item"
      >
        {{item}}
      </p>
    </div>
    <p
      :class="`subtitle-2 text-uppercase font-weight-bold resume-p`"
    >
      Project
    </p>
    <div v-for="(item, i) in project.name" :key="i">
      <p
        v-if="i<2"
        :class="`caption font-weight-light resume-p`"
        v-html="item"
      >
        {{item}}
      </p>
    </div>
    <p
      :class="`subtitle-2 text-uppercase font-weight-bold resume-p`"
    >
      Internship
    </p>
    <p
      :class="`caption font-weight-regular resume-p`"
    >
      {{internship.where}}
    </p>
    <p
      :class="`caption font-weight-light resume-p`"
    >
      &bull; {{internship.project}}
    </p>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/card.scss";
</style>

<script>
import info from "@/assets/info.json";

export default {
  name: "ResumeRightSideEducation",
  data: () => ({
    university: info.education.main.university.substring(0,14)+".",
    faculty: info.education.main.faculty,
    period: info.education.main.period,
    thesis: info.education.thesis,
    internship: info.education.internship,
    project: info.education.project,
    work: info.education.work,
  }),
  components: {
  },
};
</script>
