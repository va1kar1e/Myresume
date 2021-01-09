<template>
  <v-card>
    <v-card-title class="headline displayresume text-uppercase">
      My Resume
    </v-card-title>
    <v-card-text>
      <p class="title font-weight-light text-center white--text text-uppercase">
        Scan QR Code or Click this below link
      </p>
      <v-row class="my-3 displayresume text-center">
        <v-col cols="5" class="profile-resume-col">
          <qrcode-vue
            :value="resume_file_fullpath"
            :size="size"
            level="M"
            :renderAs="renderAs"
            :background="background"
            :foreground="foreground"
          ></qrcode-vue>
          <v-btn :to='resume_file_path' target="_blank">
            <span class="mr-2">Downlond File</span>
            <v-icon color="white">fas fa-cloud-download-alt</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="2">
          <p class="title text-center font-weight-bold white--text mb-5 profile-p">
            OR
          </p>
        </v-col>
        <v-col cols="5" class="profile-resume-col">
          <qrcode-vue
            :value="resume_fullpath"
            :size="size"
            level="M"
            :renderAs="renderAs"
            :background="background"
            :foreground="foreground"
          ></qrcode-vue>
          <v-btn :to='resume_path' target="_blank">
            <span class="mr-2">See Online</span>
            <v-icon color="white">fas fa-eye</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.v-btn {
  background-color: #060f1a;
}
.displayresume {
  justify-content: center;
}
</style>

<script>
import QrcodeVue from "qrcode.vue";
import info from "@/assets/info.json";

export default {
  data() {
    return {
      resume_path: "/resume",
      resume_fullpath: location.origin + "/resume",
      resume_file_path: "/files/" + info.urllink.resume,
      resume_file_fullpath: location.origin + "/files/" + info.urllink.resume,
      size: 150,
      renderAs: "svg",
      background: "#020913",
      foreground: "#ffffff"
    };
  },
  components: {
    QrcodeVue,
  },
};
</script>
