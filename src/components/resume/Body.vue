<template>
  <div class="body">
    <Work />
    <Education />
    <Recognition />
    <Cert />
    <Interest />
  </div>
</template>

<script>
import Work from "./Components/Work.vue";
import Education from "./Components/Education.vue";
import Recognition from "./Components/Recognition.vue";
import Cert from "./Components/Cert.vue";
import Interest from "./Components/Interest.vue";

export default {
  name: "ResumeBody",
  components: {
    Work,
    Education,
    Recognition,
    Cert,
    Interest
  }
};
</script>
