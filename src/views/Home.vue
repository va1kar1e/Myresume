<template>
  <div class="home content-container">
    <Header />
    <Hireme />
  </div>
</template>

<script>
import Hireme from "@/views/Hireme.vue";
import Header from "@/views/Header.vue";

export default {
  components: {
    Hireme,
    Header
  },
  data() {
    return {
      title: "Home"
    };
  }
};
</script>
