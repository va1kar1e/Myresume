<template>
  <v-col cols="5" class="red">
    <h4 class="headline font-weight-bold text-uppercase">
      {{fullname}}
    </h4>
    <p class="caption font-weight-bold text-uppercase">
      {{title}}
    </p>
  </v-col>
</template>

<script>
import info from "@/assets/info.json";

export default {
  name: "ResumeHeaderSection1",
  data() {
    return {
      fullname: info.header.fullname,
      title: info.header.title
    };
  }
};
</script>
