<template>
  <div class="resume-header">
    <v-row class="d-flex text-center">
      <v-col cols="5" class="red">
        <h1 class="display-2 font-weight-bold mb-5 text-uppercase text-center">
          {{fullname}}
          {{title}}
        </h1>
      </v-col>
      <v-col cols="3" class="green">
        <h1 class="display-2 font-weight-bold mb-5 text-uppercase text-center">
          Header Section2
        </h1>
      </v-col>
      <v-col cols="4" class="blue">
        <h1 class="display-2 font-weight-bold mb-5 text-uppercase text-center">
          Header Section3
        </h1>
      </v-col>
    </v-row>
    <HorizontalLine />
  </div>
</template>

<script>
import HorizontalLine from "@/components/resume/components/HorizontalLine.vue";
import info from "@/assets/info.json";

export default {
  name: "ResumeHeader",
  data() {
    return {
      fullname: info.header.fullname,
      title: info.header.title
    };
  },
  components: {
    HorizontalLine,
  }
};
</script>
