<template>
  <div class="education mt-1">
    <p class="subtitle-1 font-weight-bold text-uppercase text-center resume-p">
      Education
    </p>
    <div class="horizontal-line mb-3"></div>
    <v-row>
      <v-col cols="8" class="resume-col">
        <p
          class="subtitle-1 font-weight-bold text-uppercase resume-p"
        >
          {{ university }}
        </p>
      </v-col>
      <v-col cols="4" class="resume-col">
        <p class="subtitle-2 text-right font-italic font-weight-thin resume-p">
          {{ period }}
        </p>
      </v-col>
    </v-row>
    <p class="subtitle-2 font-weight-regular resume-p">
      {{ faculty }}
    </p>
    <p
      :class="`caption text-uppercase font-weight-bold resume-p`"
    >
      Thesis
    </p>
    <p
      :class="`caption font-weight-regular resume-p`"
    >
      {{thesis.name}}
    </p>
    <p
      v-for="(archieve, l) in thesisArchieve" :key="l"
      class="caption font-weight-light resume-p"
      v-html="archieve"
    >
      {{ archieve }}
    </p>
    <p
      :class="`caption text-uppercase font-weight-bold resume-p`"
    >
      Extracurricular Work
    </p>
    <div v-for="(work, k) in works" :key="k">
      <p
        :class="`caption font-weight-regular resume-p`"
      >
        {{work[0]}}
      </p>
      <div v-for="(w, j) in work[1]" :key="j">
        <p
          v-if="j<2"
          :class="`caption font-weight-light resume-p-list`"
          v-html="w"
        >
          {{w}}
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
    thesisArchieve: [
      info.education.thesis.archieve[0],
      info.education.thesis.archieve[5],
    ],
    works: [
      ["1. Junior Research Student, " + info.education.work.where, info.education.work.project],
      ["2. Curricular Projects", info.education.project.name],
    ]
  })
};
</script>
