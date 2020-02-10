<template>
  <div class="home content-container">
    <Header />
  </div>
</template>

<script>
import Hireme from "@/views/Hireme.vue";
import Header from "@/views/header/index";

export default {
  components: {
    Header
  },
  data() {
    return {
      title: "Home"
    };
  }
};
</script>
