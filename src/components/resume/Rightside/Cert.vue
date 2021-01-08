<template>
  <div>
    <p class="headline font-weight-bold text-uppercase resume-p">
      Certifications
    </p>
    <v-row class="resume-row" justify="center">
      <v-col
        cols="3"
        class="resume-cert-col"
        v-for="(c, i) in cert"
        :key="i"
      >
        <v-img
          :src="require('@/assets/images/cert/' + c.icon + '.png')"
          :alt="c.name"
          contain
          min-height="80"
          max-height="80"
        >
        </v-img>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/card.scss";
</style>

<script>
import info from "@/assets/info.json";

export default {
  name: "ResumeRightSideCert",
  data: () => ({
    cert: info.cert.item.course,
  }),
  components: {
  },
};
</script>
