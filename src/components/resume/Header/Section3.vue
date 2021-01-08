<template>
  <v-col cols="3" class="resume-header-section3 text-right">
    <QRResume :url="homepage" size="75" />
    <p class="caption text-right"></p>
    <p
      v-for="(content, i) in contacts"
      :key="i"
      class="caption text-right resume-header-section-p"
    >
      <a :href="content[0]" class="resume-header-section-a">{{ content[1] }}</a>
    </p>
  </v-col>
</template>

<script>
import info from "@/assets/info.json";
import QRResume from "@/components/resume/Components/QRResume.vue"

export default {
  name: "ResumeHeaderSection3",
  data() {
    return {
      homepage: location.origin,
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
