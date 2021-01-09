<template>
  <v-col cols="6" class="resume-header-section1">
    <p class="headline font-weight-bold text-uppercase resume-p">
      {{fullname}}
    </p>
    <p class="body-1 font-weight-bold text-uppercase">
      {{title}}
    </p>
    <p
      v-for="(content, i) in aboutme"
      :key="i"
      class="caption text-justify font-weight-light resume-p"
      v-html="content"
    >
      {{ content }}
    </p>
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
      aboutme: info.aboutme.contentText,
    };
  }
};
</script>
