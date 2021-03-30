<template>
  <div class="miscellaneous mt-1">
    <p class="subtitle-1 font-weight-bold text-uppercase text-center resume-p">
      miscellaneous
    </p>
    <div class="horizontal-line mb-1"></div>
    <p :class="`caption font-weight-regular resume-p`" v-html="recognitions">
      {{ recognitions }}
    </p>
    <p
      class="caption font-weight-regular resume-p"
    >
      Courses: {{ courses }}
    </p>
    <p
      class="caption font-weight-regular resume-p"
    >
      Interests: {{ interest }}
    </p>
  </div>
</template>

<script>
import info from "@/assets/info.json";

export default {
  name: "ResumeMisc",
  data: () => ({
    interest: info.interest.items.join(", "),
    courses: info.course.items.join(", "),
    recognitions: [
      "Recognitions: ",
      info.recognition.item.course[0].what + " - <i>" + info.recognition.item.course[0].when + "</i>, ",
      info.recognition.item.course[1].what + " - <i>" + info.recognition.item.course[1].when + "</i>" ,
    ].join(" "),
  }),
  components: {
  },
};
</script>
