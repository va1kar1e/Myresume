<template>
  <v-col cols="4" class="resume-header-section2">
    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="5" class="resume-header-section3p1">
        <v-img
          :src="require('@/assets/images/profilepic.png')"
          contain
          max-height="85"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="black" />
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col cols="5" class="resume-header-section3p2 text-right">
        <QRResume :url="contacts[1][1]" size="85" />
      </v-col>
    </v-row>
    <v-row class="resume-header-section3">
      <v-col cols="12" class="">
        <p
          v-for="(content, i) in contacts"
          :key="i"
          class="caption text-right font-weight-regular resume-p"
        >
          <a :href="content[0]" class="resume-a">{{ content[1] }}</a>
        </p>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import info from "@/assets/info.json";
import QRResume from "@/components/resume/Components/QRResume.vue"

export default {
  name: "ResumeHeaderSection2",
  data() {
    return {
      contacts: [
        ["mailto:" + info.header.email, info.header.email],
        [info.urllink.homepage, info.urllink.homepage],
        [info.urllink.github, info.urllink.github],
        [info.urllink.linkedin, info.urllink.linkedin],
      ],
    };
  },
  components: {
    QRResume,
  }
};
</script>
