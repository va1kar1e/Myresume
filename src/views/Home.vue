<template>
  <div class="home content-container">
    <h1>{{ title }}</h1>
    <Hireme />
  </div>
</template>

<script>
import Hireme from "@/views/Hireme.vue";

export default {
  components: {
    Hireme
  },
  data() {
    return {
      title: "Home"
    };
  }
};
</script>
