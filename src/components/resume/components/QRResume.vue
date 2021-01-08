<template>
  <qrcode-vue
    :value="url"
    :size="size"
    level="M"
    :renderAs="renderAs"
    :background="background"
    :foreground="foreground"
  ></qrcode-vue>
</template>

<script>
import QrcodeVue from "qrcode.vue";

export default {
  props: {
    url: String
  },
  data() {
    return {
      size: 100,
      renderAs: "svg",
      background: "#ffffff",
      foreground: "#000000",
    };
  },
  components: {
    QrcodeVue,
  },
};
</script>
