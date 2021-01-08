<template>
  <div>
    <p class="headline font-weight-bold text-uppercase resume-p">
      Extracuricular Interests
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
  name: "ResumeRightSideInterest",
  data: () => ({
    items: info.interest.items.join(", ")
  }),
  components: {
  },
};
</script>
