<template>
  <v-col cols="3" class="resume-header-section2" justify="center">
    <v-img
      :src="require('@/assets/images/profilepic.png')"
      class="resume-header-section-img"
      contain
      max-height="150"
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular indeterminate color="black" />
        </v-row>
      </template>
    </v-img>
  </v-col>
</template>

<script>
export default {
  name: "ResumeHeaderSection2",
  data() {
    return {
    };
  }
};
</script>
