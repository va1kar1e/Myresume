<template>
  <v-card>
    <v-card-title class="headline displayresume"
      >Download My Resume</v-card-title
    >

    <v-card-text>
      <v-row class="my-3 displayresume">
        <qrcode-vue :value="value" :size="size" level="M"></qrcode-vue>
        <p class="font-weight-light black--text">
          Scan QR Code or Click this below link
        </p>
        <v-btn to="/d/resume" target="_blank" text>
          <span class="mr-2">Downlond Link</span>
          <v-icon color="grey darken-4">fas fa-cloud-download-alt</v-icon>
        </v-btn>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<style>
.displayresume {
  display: block !important;
  text-align: center;
}
</style>

<script>
import QrcodeVue from "qrcode.vue";

export default {
  data() {
    return {
      value: location.href + "d/resume",
      size: 200,
      renderAs: "svg",
    };
  },
  components: {
    QrcodeVue,
  },
};
</script>
