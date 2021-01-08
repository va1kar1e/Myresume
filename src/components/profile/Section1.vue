<template>
  <div class="section1">
    <Header />
    <Aboutme />
  </div>
</template>

<script>
import Header from "./Section1/Header.vue";
import Aboutme from "./Section1/Aboutme.vue";

export default {
  name: "ProfileSection1",
  components: {
    Header,
    Aboutme,
  },
};
</script>
