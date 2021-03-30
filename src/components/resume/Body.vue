<template>
  <div class="body">
    <Aboutme />
    <Work />
    <Education />
    <Cert />
    <Misc />
  </div>
</template>

<script>
import Aboutme from "./Components/Aboutme.vue";
import Work from "./Components/Work.vue";
import Education from "./Components/Education.vue";
// import Recognition from "./Components/Recognition.vue";
import Cert from "./Components/Cert.vue";
import Misc from "./Components/Misc.vue";

export default {
  name: "ResumeBody",
  components: {
    Aboutme,
    Work,
    Education,
    Cert,
    Misc
  }
};
</script>
