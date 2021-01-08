<template>
  <div class="section2">
    <Education />
    <Work />
  </div>
</template>

<style lang="scss">
// @import "@/styles/profile.scss";
</style>

<script>
import Education from "@/components/profile/section2/education/Education.vue";
import Work from "@/components/profile/section2/Work.vue";

export default {
  name: "ProfileSection2",
  components: {
    Education,
    Work,
  },
};
</script>
