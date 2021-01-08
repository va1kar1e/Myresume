<template>
  <div class="section2">
    <Education />
    <Work />
  </div>
</template>

<script>
import Education from "@/components/profile/Section2/Education.vue";
import Work from "@/components/profile/Section2/Work.vue";

export default {
  name: "ProfileSection2",
  components: {
    Education,
    Work,
  },
};
</script>
