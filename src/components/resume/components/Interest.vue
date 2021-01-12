<template>
  <div class="miscellaneous mt-1">
    <p class="subtitle-1 font-weight-bold text-uppercase text-center resume-p">
      miscellaneous
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
    courses: info.course.items.join(", ")
  }),
  components: {
  },
};
</script>
