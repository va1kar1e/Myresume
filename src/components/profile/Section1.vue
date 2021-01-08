<template>
  <div class="section1">
    <Header />
    <Aboutme />
  </div>
</template>

<style lang="scss">
// @import "@/styles/profile.scss";
</style>

<script>
import Header from "@/components/profile/section1/Header.vue";
import Aboutme from "@/components/profile/section1/Aboutme.vue";

export default {
  name: "ProfileSection1",
  components: {
    Header,
    Aboutme,
  },
};
</script>
