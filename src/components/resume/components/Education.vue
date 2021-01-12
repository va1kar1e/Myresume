<template>
  <div class="education mt-1">
    <p class="subtitle-1 font-weight-bold text-uppercase text-center resume-p">
      Education
    </p>
    <v-row>
      <v-col cols="8" class="resume-col">
        <p
          class="subtitle-1 font-weight-bold text-uppercase resume-p"
        >
          {{ university }}
        </p>
      </v-col>
      <v-col cols="4" class="resume-col">
        <p class="caption text-right font-italic font-weight-regular resume-p">
          {{ period }}
        </p>
      </v-col>
    </v-row>
    <p class="subtitle-2 font-weight-regular resume-p">
      {{ faculty }}
    </p>
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
    <div v-for="(item, i) in works" :key="i">
      <p
        :class="`caption font-weight-regular resume-p`"
      >
        {{item[0]}}
      </p>
      <div v-for="(name, i) in item[1]" :key="i">
        <p
          v-if="i<2"
          :class="`caption font-weight-light resume-p-list`"
          v-html="name"
        >
          {{name}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import info from "@/assets/info.json";

export default {
  name: "ResumeEducation",
  data: () => ({
    university: info.education.main.university,
    faculty: info.education.main.faculty,
    period: info.education.main.period,
    thesis: info.education.thesis,
    works: [
      ["1. Junior Research Student, " + info.education.work.where, info.education.work.project],
      ["2. Curricular Projects", info.education.project.name],
    ]
  })
};
</script>
