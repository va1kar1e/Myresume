<template>
  <div class="home content-container">
    <Header />
  </div>
</template>

<script>
import Hireme from "@/views/Hireme.vue";
import Header from "@/views/Header.vue";

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
