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
        <v-btn to="/d/resume" target="_blank" text>
          <span class="mr-2">Downlond Link</span>
          <v-icon color="white">fas fa-cloud-download-alt</v-icon>
        </v-btn>
        <v-btn @click="createPDF" text><span class="mr-2">Download PDF</span></v-btn>
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
import jsPDF from 'jspdf'

export default {
  data() {
    return {
      value: location.href + "d/resume",
      size: 200,
      renderAs: "svg",
      background: "#263859",
      foreground: "#ffffff",
    };
  },
  methods: {
    createPDF () {
      let pdfName = 'test'; 
      var doc = new jsPDF();
      doc.text("Hello World", 10, 10);
      doc.save(pdfName + '.pdf');
    }
  },
  components: {
    QrcodeVue,
  },
};
</script>
