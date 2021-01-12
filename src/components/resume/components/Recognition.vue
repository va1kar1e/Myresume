<template>
  <div class="recognition mt-1">
    <p class="subtitle-1 font-weight-bold text-uppercase text-center resume-p">
      Recognitions
    </p>
    <div v-for="(c, i) in item.course" :key="i" >
      <p :class="`caption font-weight-regular resume-p`">
        &bull; {{ c.what }}, {{ c.when }}, {{ c.who }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import info from "@/assets/info.json";

export default {
  name: "ResumeRecognition",
  data: () => ({
    item: info.recogntion.item
  }),
};
</script>
