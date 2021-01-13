<template>
  <div class="cert mt-1">
    <p class="subtitle-1 font-weight-bold text-center text-uppercase resume-p">
      Certifications
    </p>
    <div class="horizontal-line mb-1"></div>
    <p class="caption font-weight-regular resume-p">
      {{cert[1].name}}, {{cert[2].name}}, {{cert[0].name}}, {{cert[3].name}}
    </p>
  </div>
</template>

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
