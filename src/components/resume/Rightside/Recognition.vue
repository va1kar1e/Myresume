<template>
  <div>
    <p class="headline font-weight-bold text-uppercase resume-p">
      Recognitions
    </p>
    <div v-for="(c, i) in item.course" :key="i" >
      <p :class="`subtitle-2 text-uppercase font-weight-bold resume-p`">
        {{ c.what }}
      </p>
      <p class="caption font-weight-light resume-p">{{ c.who }}</p>
      <p class="caption font-weight-regular resume-p">{{ c.when }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/card.scss";
</style>

<script lang="ts">
import info from "@/assets/info.json";

export default {
  name: "ResumeRightSideRecognition",
  data: () => ({
    item: info.recogntion.item
  }),
};
</script>
