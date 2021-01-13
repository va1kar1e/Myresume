<template>
  <v-col cols="8" class="resume-header-section1 mb-5">
    <p class="headline font-weight-bold text-uppercase resume-p">
      {{fullname}}
    </p>
    <p class="body-1 font-weight-bold text-uppercase  resume-p">
      {{title}}
    </p>
    <v-row class="resume-header-section3">
      <v-col cols="4" v-for="(contact, i) in contacts" :key="i">
        <p
          v-for="(content, j) in contact"
          :key="j"
          class="caption font-weight-regular resume-p"
        >
          <a :href="content[0]" class="resume-a">{{ content[1] }}</a>
        </p>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import info from "@/assets/info.json";

export default {
  name: "ResumeHeaderSection1",
  data() {
    return {
      fullname: info.header.fullname,
      title: info.header.title,
      contacts: [
        [
          [info.urllink.homepage, info.urllink.homepage],
          ["mailto:" + info.header.email, info.header.email],
        ],
        [
          [info.urllink.linkedin, info.urllink.linkedin],
          [info.urllink.github, info.urllink.github],
        ]
      ],
    };
  },
};
</script>
