<template>
  <v-card>
    <v-card-title class="headline displayresume text-uppercase"
      >Download My Resume</v-card-title
    >
    <v-card-text>
      <v-row class="my-3 displayresume">
        <qrcode-vue
          :value="value"
          :size="size"
          level="M"
          :renderAs="renderAs"
          :background="background"
          :foreground="foreground"
        ></qrcode-vue>
        <p class="font-weight-light white--text">
          Scan QR Code or Click this below link
        </p>
        <v-btn :to='value' target="_blank" text>
          <span class="mr-2">Downlond File</span>
          <v-icon color="white">fas fa-cloud-download-alt</v-icon>
        </v-btn>
        <v-btn :to='resume_path' target="_blank" text>
          <span class="mr-2">or See Online</span>
          <v-icon color="white">fas fa-eye</v-icon>
        </v-btn>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.v-btn {
  background-color: #263859;
}
.displayresume {
  display: block !important;
  text-align: center;
}
</style>

<script>
import QrcodeVue from "qrcode.vue";
import info from "@/assets/info.json";

export default {
  data() {
    return {
      resume_path: '/resume',
      value: location.href + "/files/" + info.urllink.resume,
      size: 200,
      renderAs: "svg",
      background: "#263859",
      foreground: "#ffffff"
    };
  },
  components: {
    QrcodeVue,
  },
};
</script>
