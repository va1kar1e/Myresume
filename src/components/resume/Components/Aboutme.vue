<template>
  <div class="aboutme mt-1">
    <p
      class="caption text-justify font-weight-light resume-p"
      v-html="aboutme"
    >
      {{ aboutme }}
    </p>
</div>
</template>

<script>
import info from "@/assets/info.json";

export default {
  name: "ResumeAboutme",
  data() {
    return {
      aboutme: info.aboutme.contentTextString,
    };
  },
};
</script>
