<template>
  <div>
    <p class="headline font-weight-bold text-uppercase resume-p">
      Extracurricular Courses
    </p>
    <p
      class="caption font-weight-regular resume-p"
    >
      {{ items }}
    </p>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/card.scss";
</style>

<script>
import info from "@/assets/info.json";

export default {
  name: "ResumeRightSideCourse",
  data: () => ({
    items: info.course.items.join(", ")
  }),
};
</script>
