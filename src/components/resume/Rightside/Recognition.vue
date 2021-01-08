<template>
  <div>
    <p class="title font-weight-bold text-uppercase resume-p">
      Recognitions
    </p>
    <div justify="center" v-for="(c, i) in item.course" :key="i" >
        <p :class="`title font-weight-bold mb-2 text-uppercase text-center`">
          {{ c.what }}
        </p>
        <p class="subtitle-1 text-center">{{ c.when }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import info from "@/assets/info.json";

export default {
  name: "ResumeRightSideRecogntion",
  data: () => ({
    item: info.recogntion.item
  }),
};
</script>
